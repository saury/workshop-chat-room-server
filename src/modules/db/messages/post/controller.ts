import { createController, logger } from 'modules/core';
import { db, setup, tables } from 'modules/db';

import { isMessageRequest } from './isMessageRequest';
import { MsgRequest } from './types';

export const controller = createController(async (req, res) => {
    // return 400 if post info is not valid
    if (!isMessageRequest(req.body)) {
        logger.debug(req.body);
        return res.status(400).send('Bad Request');
    }
    logger.debug(req.body.message);
    const data = await db.doc.scan({ TableName: tables.messages }).promise();
    res.status(200).json(data);
});
