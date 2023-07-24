export const livros = [
    {
        titulo: "Dom Quixote",
        autor: "Miguel de Cervantes",
        anoPublicacao: 1605,
        genero: "Romance",
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        anoPublicacao: 1949,
        genero: "Distopia",
    },
    {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        anoPublicacao: 1954,
        genero: "Fantasia",
    },
    {
        titulo: "Cem Anos de Solidão",
        autor: "Gabriel García Márquez",
        anoPublicacao: 1967,
        genero: "Realismo Mágico",
    },
    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        anoPublicacao: 1943,
        genero: "Infantil",
    },
    {
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        anoPublicacao: 1945,
        genero: "Sátira",
    },
];
export function buscarLivros(id) {
    console.log("Buscando filme com id", id);
}
