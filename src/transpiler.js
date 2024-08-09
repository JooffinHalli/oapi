module.exports = class OpenapiTranspiler {

  constructor(openapiDoc, config) {
    this.openapiDoc = openapiDoc;
    this.config = config;
  }

  alphabet = {

    'openapi': (state, { 1: value }) => {
      if (parseInt(value) < 3) throw 1;
      return state;
    },

    'paths': (state, { 1: value }) => {
      var { acc, acc2, temp, tab } = this.reduce(value, {
        acc: [],
        acc2: [],
        temp: [],
        tab: '  ',
        alphabet: {
          '*': (state, { 0: id, 1: value }) => {
            if (!this.config.pathBlackList.some((str) => id.startsWith(str))) {
              var { tab, acc, temp, comments } = this.reduce(
                value,
                this.state.one(state.tab, [], this.method.acc())
              );
              var comment = this.joinComments(comments, tab);
              var identifier = this.identifier(id, '');
              var type = this.obj(acc, tab, '\n\n');
              state.acc.push(comment + tab + '' + identifier + ': ' + type);
              var stack = state.temp;
              var head = stack[stack.length - 1];
              (!stack.length || (id.length > head)) && stack.push(id.length);
              state.acc2.push([id, '0b' + temp.join('')]);
            }
            return state;
          }
        }
      });
      var endpoints = this.method.join(temp[temp.length - 1], tab)(acc2);
      state.paths = 'export type Paths = ' + this.obj(acc, '', '\n\n');
      state.endpoints = 'export const endpoints = <const>' + this.obj(endpoints, '', '\n', ',');
      return state;
    },

    'get':     (state, statement) => this.reducers.method(state, statement),
    'put':     (state, statement) => this.reducers.method(state, statement),
    'post':    (state, statement) => this.reducers.method(state, statement),
    'delete':  (state, statement) => this.reducers.method(state, statement),
    'options': (state, statement) => this.reducers.method(state, statement),
    'head':    (state, statement) => this.reducers.method(state, statement),
    'patch':   (state, statement) => this.reducers.method(state, statement),
    'trace':   (state, statement) => this.reducers.method(state, statement),

    'responses':   (state, statement) => this.reducers.withKey(state, statement, 'res'),
    'requestBody': (state, statement) => this.reducers.withKey(state, statement, 'body'),
    'parameters': (state, { 1: value }) => {
      var newTab = state.tab + '  ';
      var acc = value.reduce(this.parameters.reduce(newTab), { path: [], query: [] });
      for (var k in acc) {
        var arr = acc[k];
        var type = this.obj(arr, newTab, '\n');
        var identifier = this.identifier(k + 'Params', arr.question);
        arr.length && state.acc.push(newTab + identifier + ': ' + type);
      }
      return state;
    },

    '200':                      (state, { 1: value }) => this.reduce(value, state),
    '201':                      (state, { 1: value }) => this.reduce(value, state),
    'content':                  (state, { 1: value }) => this.reduce(value, state),
    'application/json':         (state, { 1: value }) => this.reduce(value, state),
    'application/octet-stream': (state, { 1: value }) => this.reduce(value, state),
    'multipart/form-data':      (state, { 1: value }) => this.reduce(value, state),
    'text/plain':               (state, { 1: value }) => this.reduce(value, state),

    'schema': (state, { 1: value }) => {
      var newState = this.schema.reduce(value, state.tab);
      state.required = newState.required;
      state.acc = this.schema.join(newState);
      return state;
    },

    'components': (state, { 1: value }) => {
      return this.reduce(value, Object.assign(state, {
        alphabet: {
          'schemas': (state, { 1: value }) => {
            var { acc } = this.reduce(value, {
              acc: this.arr(value.length),
              alphabet: {
                '*': this.reducers.schema
              },
              tab: '  ',
              keyword: 'export type ',
              binder: ' = ',
              required: null
            });
            var schemas = this.obj(acc, '', '\n\n');
            state.schemas = ('export namespace Schemas ' + schemas);
            return state;
          },
        }
      }));
    },

    'required': (state, { 1: value }) => {
      state.required = value;
      return state;
    },

    'description': (state, statement) => this.reducers.comment(state, statement),
    'summary':     (state, statement) => this.reducers.comment(state, statement),
    'operationId': (state, statement) => this.reducers.comment(state, statement),
    'deprecated':  (state, statement) => this.reducers.comment(state, statement, true),

    'allOf': (state, { 1: value }) => this.reducers.comboSchema(state, value, '&'),
    'oneOf': (state, { 1: value }) => this.reducers.comboSchema(state, value, '|'),
    'anyOf': (state, { 1: value }) => this.reducers.comboSchema(state, value, '|'),

    'x-enumNames': (state, { 1: value }) => {
      state.temp = value.map((x) => (state.tab + ' * * ' + '`' + x + '`' + ' - '));
      return state;
    },
    'enum': (state, { 1: value }) => {
      if (!value.length) return state;
      var names = state.temp, l1 = names?.length;
      for (var i = 0; i < l1; i++) (names[i] += value[i]);
      state.comments.push(state.tab + ' * @names' + '\n' + names?.join('\n'));
      state.acc = value.join(' | ');
      state.isDone = true;
      return state;
    },

    '$ref': (state, { 1: value }) => {
      state.acc = value.replace('#/components/schemas/', `Schemas.`);
      return state;
    },

    'items': (state, { 1: value }) => {
      state.acc = (this.schema.type(value, state.tab) + '[]');
      state.skip.add('type');
      return state;
    },

    'properties': (state, { 1: value }) => {
      var { acc } = this.reduce(value, {
        acc: this.arr(value.length),
        alphabet: {
          '*': this.reducers.schema
        },
        tab: state.tab + '  ',
        keyword: '',
        binder: ': ',
        required: state.required
      });
      state.acc = this.obj(acc, state.tab, '\n');
      state.skip.add('type');
      return state;
    },

    'additionalProperties': (state, { 1: value }) => {
      if (!value) return state;
      state.additionalAcc = (value === true)
        ? 'Record<string, unknown>'
        : ('Record<string, ' + this.schema.type(value, state.tab) + '>')
      state.skip.add('type');
      return state;
    },

    'type': OpenapiTranspiler.skippable((state, { 1: value }) => {
      (value in this.schema.typeMap) && (state.acc = (this.schema.typeMap[value]));
      return state;
    }),

    'nullable': (state, { 1: value }) => {
      value && (state.nullAcc = 'null');
      return state;
    }

  };

  reducers = {
    comment: (state, { 0: word, 1: value }, noValue) => {
      if (!value) return state;
      var tab = state.tab;
      var comment = noValue ? '' : value.toString().replaceAll('\n', ('\n' + tab + ' * '));
      state.comments.push(tab + ' * @' + word + ' ' + comment);
      return state;
    },
    method: (state, { 0: word, 1: value }) => {
      var { comments, tab, acc } = this.reduce(value, this.state.one(state.tab + '  ', []));
      var comment = this.joinComments(comments, tab);
      var type = this.obj(acc, tab, '\n');
      state.acc.push(comment + tab + word + ': ' + type);
      state.temp[this.method.index[word]] = 1;
      return state;
    },
    schema: (state, { 0: id, 1: value }, i) => {
      var newState = this.schema.reduce(value, state.tab);
      var comment = this.joinComments(newState.comments, newState.tab);
      var question = this.question(state.required, id);
      var identifier = this.identifier(id, question);
      var type = this.schema.join(newState);
      state.acc[i] = (comment + newState.tab + state.keyword + identifier + state.binder + type);
      return state;
    },
    comboSchema: (state, value, sign) => {
      var type = value.reduce((a, v, i) => {
        var type = this.schema.type(v, state.tab);
        a[i] = (type.includes(')') ? ('(' + type + ')') : type);
        return a;
      }, this.arr(value.length)).join(' ' + sign + ' ');
      state.acc = ((value.length > 1) ? ('(' + type + ')') : type);
      return state;
    },
    withKey: (state, { 1: value }, key) => {
      var newState = this.reduce(value, this.state.one(state.tab + '  ', 'unknown'));
      var { tab, acc, comments, required } = newState;
      var comment = this.joinComments(comments, tab);
      var question = required.length ? '' : '?';
      var identifier = this.identifier(key, question);
      state.acc.push(comment + tab + identifier + ': ' + acc);
      return state;
    }
  }

  parameters = {
    get: (v) => {
      var value = new Map(v);
      if (!value.has('$ref')) return v;
      var { 3: name } = value.get('$ref').split('/');
      var param = this.openapiDoc.components.parameters[name];
      return this.parameters.get(OpenapiTranspiler.prepare(param));
    },
    reduce: (newTab) => (a, value) => {
      var v = this.parameters.get(value);
      var p = new Map(v);
      var { tab, acc, comments } = this.reduce(v, this.state.one(newTab + '  '));
      var comment = this.joinComments(comments, tab);
      var question = p.get('required') ? '' : '?';
      var identifier = this.identifier(p.get('name'), question);
      a[p.get('in')]?.push(comment + tab + identifier + ': ' + acc);
      (a[p.get('in')]) && (a[p.get('in')].question ||= question);
      return a;
    }
  }

  schema = {
    typeMap: {
      string: 'string',
      number: 'number',
      integer: 'number',
      object: 'Record<string, unknown>',
      array: 'unknown[]',
      boolean: 'boolean',
      null: 'null'
    },
    order: [
      'required',
      'description',
      'allOf',
      'oneOf',
      'anyOf',
      'x-enumNames',
      'enum',
      '$ref',
      'items',
      'properties',
      'additionalProperties',
      'type',
      'nullable'
    ],
    sort: (value) => this.schema.order.reduce(
      (a, w) => (a[1].has(w) && a[0].push([w, a[1].get(w)]), a),
      [[], new Map(value)]
    )[0],
    join: ({ acc, additionalAcc, nullAcc }) => {
      var withBraces = (acc && additionalAcc && nullAcc);
      var res = acc;
      (res && additionalAcc) && (res += (' & ' + additionalAcc));
      (!res) && (res += additionalAcc);
      (withBraces) && (res = ('(' + res + ')'));
      (res && nullAcc) && (res += (' | ' + nullAcc));
      (!res) && (res += nullAcc);
      return (res || 'unknown');
    },
    type: (value, tab) => this.schema.join(this.schema.reduce(value, tab)),
    reduce: (value, tab) => this.reduce(this.schema.sort(value), this.state.one(tab))
  }

  method = {
    index: { get: 6, post: 5, put: 4, delete: 3, patch: 2, head: 1, trace: 0 },
    acc: () => [0, 0, 0, 0, 0, 0, 0],
    join: (l, tab) => (arr) => arr.map(({ 0: id, 1: bits }) => {
      return tab + this.identifier(id, '') + ': ' + ' '.repeat(l - id?.length) + bits;
    })
  }

  state = {
    one: (tab, acc, temp) => ({
      tab,
      isDone: false,
      skip: new Set,
      required: [],
      acc: acc || '', // accumulator for values
      additionalAcc: '', // accumulator for additionalProperties
      nullAcc: '', // accumulator for null
      comments: [], // accumulator for comments
      temp: temp || [], // temp for anything
    })
  }

  joinComments = (c, t) => (c.length ? (t + '/**\n' + c.join('\n') + '\n' + t + ' */\n') : '');
  question = (r, id) => (!r ? '' : r.includes(id) ? '' : '?');
  identifier = (id, q) => ((/[\- \/.\{]/.test(id) ? (`'` + id + `'`) : id) + q);
  obj = (properties, t, n, j) => ('{' + n + properties.join((j || '') + n) + n + t + '}');
  str = () => '';
  arr = (length) => Array.from({ length }, this.str);

  reduce = (program, initState) => {
    return program.reduce(
      (state, statement, i) => {
        var word = statement[0];
        var alphabet = (state?.alphabet || this.alphabet);
        var reducer = (alphabet?.[word] || alphabet?.['*'] || ((x) => (x)));
        return state.isDone ? state : reducer(state, statement, i);
      },
      initState
    );
  };

  static skippable = (f) => (s, e) => (s.skip.has(e[0]) ? s : f(s, e));

  static prepare(src) {
    return (
      Array.isArray(src)
        ? src.map(this.prepare, this)
        : (src && (typeof src === 'object'))
          ? (Object.entries(src).map((e) => [e[0], this.prepare(e[1])], this))
          : src
    );
  };

};