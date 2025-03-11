import { RecipeInfo } from "../RecipeInfo/RecipeInfo"

export const Recipe = ({ recipe }) => { 
    return (
        <ul>
            {
                recipe.map(({name,time,servings,calories,difficulty,image}) => {
                    return <RecipeInfo image={image} name={name} time={time} servings={servings} calories={calories} difficulty={difficulty}  />
                })
            }
        </ul>
    )

}

