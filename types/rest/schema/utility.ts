type KeyOfUnion<T> = T extends unknown ? keyof T : never;

export { KeyOfUnion };
