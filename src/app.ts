import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import { setup as authSetup } from 'modules/authentication';
import { setup as dbSetup } from 'modules/db';

import { mount as mountHealth } from 'modules/db/health';
import { mount as mountMsgs } from 'modules/db/messages';
import { mount as mountUsers } from 'modules/db/users';

export const appSetup = async () => {
    const server = express();
    server.use(cors());
    server.use(bodyParser.json());

    await dbSetup();

    mountHealth(server);
    mountUsers(server);

    // authenize
    authSetup(server);
    mountMsgs(server);

    return server;
};
