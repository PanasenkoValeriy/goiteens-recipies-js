import styles from "./RecipeInfo.module.css"
export const RecipeInfo = ({ name, time, servings, calories, difficulty, image }) => {
    return (
        <li className={styles.item}>
            <img className={styles.image}  src={image} alt={name} />
            <h2 className={ styles.title}>{name}</h2>
            <p className={styles.paragraph}>time for cook:{time}</p>
            <p className={styles.paragraph}>servings for:{servings}</p>
            <p className={styles.paragraph}>calories:{ calories}</p>
            <p className={styles.paragraph}>cooking difficulty:{ difficulty}</p>


        </li>
    )
}