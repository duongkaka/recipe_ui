import * as request from '~/utils/request';

export const search = async (name) => {
    try {
        const res = await request.get(`search`, {
            params: {
                name,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
