// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: 'Welcome!',
  text: `I am so glad you are here, thank you for participating in this experiment!
            <br />
            <br />
            To learn what you will be doing, please click on the start button:`,
  buttonText: 'Start'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `You are asked to compare two pictures and indicate whether they show the same or different figures. Concretely this means:
            <br />
            <br />
            Press <B>f</B> if you think the figures are the <B>same</B> except for their orientation.
            <br />
            Press <B>j</B> if you think the figures are <B>different</B>.
            <br />
            <br />
            This is how a single trial will look like:
            <br />
            <img src="images/sample_trial.jpg" height="400" width="600">
            <br />
            Please try to be as fast as possible, while still aiming for accuracy.
            If you are ready, please click on the button below to start the practice trials.`,
  buttonText: 'Start Practice'
});

const instructions_main_part = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_main_part',
  title: 'Main Experiment Begins',
  text: `This was the practice part, now you will start the main experiment! Remember:
            <br />
            <br />
            Press <B>f</B> if you think the figures are the <B>same</B> except for their orientation.
            <br />
            Press <B>j</B> if you think the figures are <B>different</B>.
            <br />
            <br />
            Please still try to be as fast as possible, while still aiming for accuracy.
            If you are ready, please click on the button below to start the experiment.`,
  buttonText: 'Start Experiment'
});

const experiment_finished = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'experiment_finished',
  title: 'This was it!',
  text: `You did it!
            <br />
            <br />
            In the following, I will ask you to optionally provide basic demographic information about yourself.
            <br />
            <br />
            Everything will remain anonymous and cannot be connected to your person.`,
  buttonText: 'Go to demographic questionnaire'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help analyze the results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you again for taking part in this experiment!',
  prolificConfirmText: 'Finish'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

const key_press_2A = magpieViews.view_generator('key_press', {
  trials: trial_info.key_press_practice.length,
  name: 'key_press_2A',
  data:  _.shuffle(trial_info.key_press_practice),
  pause: 250,
});

const key_press_2B = magpieViews.view_generator('key_press', {
  trials: trial_info.key_press_main.length,
  name: 'key_press_2B',
  data:  _.shuffle(trial_info.key_press_main),
  pause: 250,
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
