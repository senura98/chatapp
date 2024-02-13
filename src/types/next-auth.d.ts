// In this file we are extending the the already available types with additional properties

import type {Session,User} from 'next-auth'
import type {JWT} from 'next-auth/jwt'

type UserId= string
declare module 'next-auth/jwt'{
    interface JWT {
        id:UserId
    }
}

declare module 'next-auth'{
    interface Session {
        user:User & {
            id: UserId
        }
    }
}