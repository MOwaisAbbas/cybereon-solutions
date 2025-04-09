export const goToSection = (elem: string) => {
    console.log("first")
    const element = document.getElementById(elem);
    element?.scrollIntoView({ behavior: 'smooth' });

}