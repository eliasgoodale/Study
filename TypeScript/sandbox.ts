type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>


export type Published = "Published";
export type Unpublished = "Unpublished";
export type Success = "Success";
export type Failure = "Failure";
export type NeverRun = "Never Run";
export type Producer = "Producer";
export type SWD = "SWD";


export type PublicationStatus = Published | Unpublished;
export type RunStatus = Success | Failure | NeverRun;
export type EntityType = Producer | SWD;

export type Nullable<T> = T | null;

export interface IIdentifiable {
    id: string
}

export interface IStringAccessor<T> {
    [key: string]: T
}



export interface IIndex extends IIdentifiable {
    id: string,
    enabled: boolean,
    entityType: string,
    location: string,
    name: string,
    publishedVersionName: Nullable<string>,
    versions: IStringAccessor<IIndexVersion>,
    _etag: string
}

export interface IIndexVersion {
    publishDate: Nullable<string>,
    publicationStatus: PublicationStatus,
    lastRunStatus: RunStatus,
    lastRunDate: Nullable<string>
    nextPullWindow: {
        from: Nullable<string>,
        to: Nullable<string>
    }
    tags: string[]
}



export interface IGridHeader extends IIdentifiable {
    inEdit: boolean,
    selected: boolean,
};

export interface IGridIndex extends IGridHeader,IIndex {

}

export interface IGridTag extends IGridHeader {
    name: string
}

const gridIndex: IGridIndex = {
    id: "",
    enabled: true,
    entityType: "SWD",
    location: "Galaxy",
    name: "Galaxy_1",
    publishedVersionName: null,
    _etag: "123456",

    versions: {
        "0": {
            publishDate: null,
            publicationStatus: "Published",
            lastRunStatus: "Never Run",
            lastRunDate: null,
            nextPullWindow: {
                from: null,
                to: null
            },
            tags: ["<Default>"]
        }
    },

    selected: false,
    inEdit: false
}

const Index: IIndex = {
    id: "",
    enabled: true,
    entityType: "SWD",
    location: "Galaxy",
    name: "Galaxy_1",
    publishedVersionName: "0",
    _etag: "123456",

    versions: {
        "0": {
            publishDate: null,
            publicationStatus: "Published",
            lastRunStatus: "Never Run",
            lastRunDate: null,
            nextPullWindow: {
                from: null,
                to: null
            },
            tags: ["<Default>"]
        }
    }
}