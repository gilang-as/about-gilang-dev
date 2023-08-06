import createEmotionServer from '@emotion/server/create-instance'
import createCache from "@emotion/cache";

export default function createEmotionCache() {
    return createCache({ key: "gilang" });
}
