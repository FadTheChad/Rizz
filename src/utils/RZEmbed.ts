import { IRZEmbedField, IRZEmbedOptions } from '../structure/interfaces/RZEmbedTypes'

class RZEmbed {
    /*
    * EMBED PROPERTIES
    */

    // Main Embed Body
    public title?: string
    public description?: string

    // Other Props
    public fields?: IRZEmbedField[]
    public footer?: string

    constructor(options?: IRZEmbedOptions) {
        this.title = options?.title ?? ''
        this.description = options?.description ?? ''
        this.fields = options?.fields ?? []
        this.footer = options?.footer ?? ''
    }

    /*
    * EMBED METHODS
    */

    public setTitle(title: string) {
        this.title = title

        return this
    }

    public setDescription(desc: string) {
        this.description = desc

        return this
    }

    public addField(field: IRZEmbedField) {
        this.fields?.push(field)

        return this
    }

    public addFields(fields: IRZEmbedField[]) {
        for (let field of fields) this.addField(field)

        return this
    }

    public setFooter(footer: string) {
        this.footer = footer

        return this
    }

    public toString() {
        if (!this.title && !this.description) throw new Error('Either title or description must be defined')

        let data = ''

        if (this.title) data += `> ## ${this.title}\n`
        if (this.description) data += `> ${this.description}\n`

        for (let field of (this.fields ?? [])) {
            data += `> ### ${field.name}\n> ${field.value}\n`
        }

        if (this.footer) data += '\n> ' + this.footer

        return data
    }
}

export default RZEmbed