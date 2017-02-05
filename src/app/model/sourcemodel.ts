export interface ISource {
    sources: ISourceObject[];

}

export interface ISourceObject {

    id?: string;
    name: string;
    description: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
    urlsToLogos?: IUrlsToLogo;
    sortBysAvailable?: string[]

}

interface IUrlsToLogo {
    small?: string;
    medium?: string;
    large?: string;
}
