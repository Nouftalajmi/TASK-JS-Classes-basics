/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  calculateAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

const person1 = new Person("Nouf", "Alajmi", "female", 1994);

console.log(person1.firstName + " " + person1.lastName);

const person2 = new Person("Noura", "Alajmi", "female", 1993);
console.log(person2.firstName + " " + person2.lastName);
const person3 = new Person("farah", "Alajmi", "female", 1996);
console.log(person2.firstName, person2.lastName);

const currentYear = 2023;

console.log(person1.calculateAge(currentYear));
console.log(person2.calculateAge(currentYear));
console.log(person3.calculateAge(currentYear));

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  rating = [];

  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
  }
  rate(rating) {
    if (rating > 0 && rating < 10) {
      this.rating.push(rating);
    }
  }

  averageRating() {
    const average =
      this.rating.reduce((acc, cu) => acc + cu, 0) / this.rating.length;
    return average;
  }

  // average = sumOfValues / countOfValues;
}
const movie1 = new Movie(" Harry Potter", 250, "novel");
const movie2 = new Movie(" pride and prejudes", 300, "novel");
const movie3 = new Movie(" the lion king", 100, "drama");
const movie4 = new Movie(" beauty and the beast", 250, "drama");

movie1.rate(9);
movie1.rate(8);
movie2.rate(9);
movie3.rate(7);
movie4.rate(6);
console.log(movie1.averageRating());

// console.log(averageRating(rating));
/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person {
  movies = [];
  addMovie(movie) {
    this.movies.push(movie);
  }
}
