import { ReadingsService, UsersService } from '#root/adapters'

const getLatestReadings = async (parent, args, context, info) => {
    if (!context.res.locals.session)
        throw new Error('Unauthorized request');
    try {
        const result = await ReadingsService.getLatestReadingOfEachLocation();
        return result;
    }
    catch (e) {
        console.log('error:', e);
    }
}

const getUser = async (parent, { id }, context, info) => {
    try {
        const result = await UsersService.getUser(id) || null;
        return result;
    } catch (e) {
        console.log('error:', e);
    }
}

const getSession = async (obj, args, context, info) => {
    if (args.me !== true)
        throw new Error('Invalid argument');
    return context.res.locals.session;
}

export {
    getLatestReadings,
    getSession,
    getUser,
}