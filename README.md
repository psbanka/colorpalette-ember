# JavaScript challenge Instructions

The Color Palette is a simple application to create a range of custom-named colors, each with a star rating. You can add colors and delete them.

It utilizes `<input type="color">`, the HTML5 visual color picker interface. See the [MDN documentation for the web APIs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color).

### Running the application locally

```
npm install
npm start
```

Use `npm test` to run tests.

## Phase 1: Fixing the current system

1. Make sure you have checked out the `master` branch and that there are no outstanding changes.
1. Review `demo.mov` in the proper subdirectory to see how the system is supposed to behave.
1. Install dependencies and start the development server and see how the system _currently_ behaves.
1. Focus on the automated tests. Do they pass? Your main objective is getting all the tests to pass. There is likely not enough time to fix all of them, but that's your goal.
1. Styling also needs fixing, this is not addressed by automated tests.

If you are a senior Javascript candidate, you'll be expected to look through the app yourself and discover the flaws and to fix them on your own. If you are a mid-level engineer candidate, you'll be pointed to the various sections of the code and asked to solve the problems presented there.

> **Note:** there is likely more work to do here than you have time for and you have multiple independent things wrong and can start wherever you like. The interviewer will likely stop you before you're finished in order to ask you other questions.

## Phase 2: Writing new features

Pick a new feature to add the system by picking a challenge you feel comfortable getting done in the time you have left. Below you’ll find some options. Ensure you write a test for whatever feature you add. For extra credit, write the test first.

### Feature choices

1. Make the form validate input: must have a name and a non-default color. Disable the submit button.
1. Make the initial color be "Fastly" with a red color and five votes.
1. Make it so the "reset" button on the form does not have the same styling as the submit button.
1. Refactor the voting system. What would you do to make this look more beautiful and to make the code cleaner?
1. Add a mirage infrastructure and use Ember Data instead of an array.
