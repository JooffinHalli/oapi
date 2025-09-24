// -------------------------------
// | this file is auto-generated |
// -------------------------------

import type { Paths } from './paths';
import { createClient } from '../createClient';

export const manualDescribedService = createClient<{
    'test/path': {
        get: {
            queryParams?: {
                id?: string
            }
            res: string[]
        }
    }
}>();