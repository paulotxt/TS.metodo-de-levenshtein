# 🔍 Projeto: Correção Aproximada com Levenshtein

Este projeto utiliza a biblioteca `fast-levenshtein` para encontrar a palavra mais próxima dentro de um vocabulário pré-definido, mesmo quando a entrada contém erros de digitação.

## 🚀 Funcionalidade

A função `ENCONTRA(palavra: string)`:

- Compara a palavra fornecida com um vocabulário fixo.
- Calcula a distância de Levenshtein entre a entrada e cada item do vocabulário.
- Retorna a palavra mais próxima se a distância for aceitável.
- Caso contrário, retorna `"Palavra desconhecida"`.

## 📦 Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [fast-levenshtein](https://www.npmjs.com/package/fast-levenshtein)

## 📚 Vocabulário Utilizado

```ts
["ola", "oie", "bom", "boa", "dia", "noite", "tarde"]
