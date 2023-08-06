export type ThemeMode = {
    body:string,
    text:string,
    fontFamily:string,
    bodyRgba:string,
    textRgba:string,
    PageMain: PageMain,
}

type PageMain = {
    Background:string,
    TextNameColor:string,
    TextJobColor:string,
    BodyBackground:string,
    BodyShadow?:string,
    LinkedinColor?:string,
    GithubColor?:string,
    EmailTitleColor?: string,
    EmailColor?: string,
    LocationTitleColor?:string,
    LocationColor?: string,
}

const ThemeLight : ThemeMode = {
    body:"#FCF6F4",
    text:"#000000",
    fontFamily:"'Source Sans Pro', sans-serif",
    bodyRgba : "252, 246, 244",
    textRgba:"0,0,0",
    PageMain:{
        Background: "#FFFFFF",
        TextNameColor: "#3B4B5E",
        TextJobColor: "#3B4B5E",
        BodyBackground: "rgba(255, 255, 255, 0.31)",
        BodyShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        LinkedinColor: "#0077B5",
        GithubColor: "#333333",
        EmailTitleColor: "#3B4B5E",
        EmailColor: "#3B4B5E",
        LocationTitleColor: "#3B4B5E",
        LocationColor: "#3B4B5E",
    }
}

const ThemeDark : ThemeMode = {
    body:"#000000",
    text:"#FCF6F4",
    fontFamily:"'Source Sans Pro', sans-serif",
    textRgba : "252, 246, 244",
    bodyRgba:"0,0,0",
    PageMain:{
        Background: "#090b0d",
        TextNameColor: "#d3d5d8",
        TextJobColor: "#c5c6c7",
        BodyBackground: "rgb(0 0 0 / 78%)",
        BodyShadow: "0 4px 30px rgb(255 255 255 / 10%)",
        LinkedinColor: "#0077B5",
        GithubColor: "#c5c6c7",
        EmailTitleColor: "#d3d5d8",
        EmailColor: "#c5c6c7",
        LocationTitleColor: "#d3d5d8",
        LocationColor: "#c5c6c7",
    }
}

export {ThemeLight, ThemeDark}