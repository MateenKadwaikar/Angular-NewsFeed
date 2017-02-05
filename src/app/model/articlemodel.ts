export interface IArticle {
    articles: Array<IArticleObject>;
}

export interface IArticleObject {

    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;

}