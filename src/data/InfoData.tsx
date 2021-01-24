import ImageOne from '../images/interior-1.jpg'
import ImageTwo from '../images/house-2.jpg'


type InfoDataType = {
    heading: string
    paragraphOne: string
    paragraphTwo: string
    buttonLabel: string
    image: string
    reverse: boolean
    delay: number
}

export const InfoData: InfoDataType = {
    heading: 'Explore our beautiful homes',
    paragraphOne: "Lorem ipsum dolor sit amet, " +
        "consectetur adipisicing elit. Corporis dolore esse illo ipsa molestias " +
        "nemo quas reprehenderit suscipit tempora velit? Dicta distinctio, exercitationem hic " +
        "inventore natus odio odit omnis sapiente.",
    paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum illum obcaecati officiis quos sit?" +
        "Accusantium asperiores atque dolor est harum, iure maxime molestiae natus optio quam ratione repudiandae" +
        "tempore vel?",
    buttonLabel: 'View Homes',
    image: ImageOne,
    reverse: false,
    delay: 100
}

export const InfoDataTwo: InfoDataType = {
    heading: 'Modern Desighs',
    paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, dolor dolore omnis quis" +
        "tenetur? Adipisci ea molestias non pariatur. A atque dolore id neque placeat possimus quidem quos sequi.",
    paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam, atque dolores fugiat" +
        "incidunt laboriosam minima neque possimus repellat vero. Animi cum cumque deserunt ducimus et nam" +
        " nesciunt odit sunt? Iure laudantium magnam nemo placeat possimus rerum ut voluptas?" +
        "Accusamus at consectetur, enim est maxime pariatur veniam. Dolorum eaque, soluta. Ab architecto autem eaque" +
        "ipsam molestias quis, repellendus repudiandae sed?",
    buttonLabel: 'View Homes',
    image: ImageTwo,
    reverse: true,
    delay: 300
}