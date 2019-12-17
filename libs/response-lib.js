export function success(body) {
    return buildRepsonse(200, body);
}

export function failure(body) {
    return buildRepsonse(500, body);
}

function buildRepsonse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(body)
    };
}