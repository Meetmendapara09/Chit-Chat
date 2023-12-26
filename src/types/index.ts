export type INAvLink = {
    imgURL: string;
    route : string;
    label : string;
}

export type IUpdateUser = {
    userID : string;
    name : string;
    bio : string;
    imageID : string;
    imageURL : URL | string; 
    file : File[];
};

export type INewPost = {
    userID : SVGStringList;
    caption : string;
    file : File[];
    location?: string;
    tags? : string;
};

export type IUpdatepost = {
    postId : string;
    caption : string;
    imageId : string;
    imageUrl : URL;
    file : File[];
    location? : string;
    tags? : string; 
};

export type IUser = {
    id: string;
    name: string;
    username : string;
    email : string;
    imageURL : string;
    bio : string;
};

export type INewUser = { 
    name: string;
    email : string;
    username: string;
    passwoerd:string;
};
