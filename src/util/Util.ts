export function* chunks<T>(arr: Array<T>, chunkSize: number):Generator<T[], void> {
    for (let i = 0; i < arr.length; i += chunkSize) {
        yield arr.slice(i, i + chunkSize);
    }
}