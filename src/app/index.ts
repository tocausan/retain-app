import * as services from './services';
export { App } from './app';
export { routes } from './routes';

const mapValueToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
    ...mapValueToArray(services)
]