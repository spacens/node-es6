export default {
    port: process.env.PORT || process.env.IL_SERVER_PORT || 3000,
    mongodb_uri: process.env.IL_MONGODB_URI,
    enc_salt: process.env.IL_ENC_SALT,
    enc_algorithm: process.env.IL_ENC_ALGO,
    jwt_secret: process.env.IL_JWT_SECRET,
    jwt_algorithm: process.env.IL_JWT_ALGO,
    jwt_expires_in: process.env.IL_JWT_EXPIRES_IN,
    google_client_id: process.env.IL_GOOGLE_CLIENT_ID,
    s3_config : {
        accessKeyId: process.env.IL_S3_ACCESSKEY_ID,
        secretAccessKey: process.env.IL_S3_SECRET_ACESSKEY,
        region: process.env.IL_S3_REGION,
        bucketName: process.env.IL_S3_BUCKET,
        key: process.env.IL_S3_KEY
    }
}
