export default interface Controller {
    execute(params: any, body: any): Promise<any>;
}