export const goToSection = (elem: string) => {
    const element = document.getElementById(elem);
    element?.scrollIntoView({ behavior: 'smooth' });

}