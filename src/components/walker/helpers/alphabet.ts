export const getLetter = (message: string, position: number): string => {
    if (position < 0 && position >= message.length){
        return '?'
    }
    return message[position];
}
