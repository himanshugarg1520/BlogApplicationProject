export interface BlogModel{
    id:number,
    title: string,
    description: string,
    likes: number,
    reactions: {[key: string]: number},
    views: number,
    userReaction?: string,
    status: 'draft' | 'published',
    isFavorite?: boolean,
    date: string,

}

export interface Blogs{
    bloglist: BlogModel[],
    Errormessage: string,
    isloaded: boolean

    // isloaded: boolean    this will commented because we create for loadspinner another model file

}