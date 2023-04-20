import classes from "./CssModules.module.scss"


export const Css = () =>{
    return (
        <div className={classes.container}>
            <p className={classes.titleStyle}>css modules</p>
            <button className={classes.buttonstyle}>Fight!</button>
        </div>
    )
}