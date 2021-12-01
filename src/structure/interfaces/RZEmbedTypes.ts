export interface IRZEmbedField {
    name: string,
    value: string
}

export interface IRZEmbedOptions {
    title?: string,
    description?: string,
    fields?: IRZEmbedField[],
    footer?: string,
    colour?: string
}