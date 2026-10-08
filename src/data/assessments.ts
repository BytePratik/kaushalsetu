import { Assessment } from '../types';

export const ASSESSMENTS_CATALOG: Assessment[] = [
  {
    id: 'asm-1',
    skillId: 'sk-1',
    skillName: 'JavaScript',
    title: 'JavaScript Core Proficiency Assessment',
    category: 'Web Development',
    durationMinutes: 10,
    totalQuestions: 5,
    passingScorePercentage: 70,
    description: 'Evaluate your knowledge of JavaScript ES6+, async programming, closures, and DOM manipulation.',
    questions: [
      {
        id: 'q-1',
        questionText: 'What is the output of `console.log(typeof null)` in JavaScript?',
        options: ['"null"', '"undefined"', '"object"', '"boolean"'],
        correctAnswerIndex: 2,
        explanation: 'In JavaScript, `typeof null` returns `"object"` due to a historical legacy implementation detail.'
      },
      {
        id: 'q-2',
        questionText: 'Which array method creates a new array populated with the results of calling a provided function on every element?',
        options: ['forEach()', 'map()', 'filter()', 'reduce()'],
        correctAnswerIndex: 1,
        explanation: '`map()` creates a new array populated with the return values of the callback function.'
      },
      {
        id: 'q-3',
        questionText: 'What does the `async` keyword placed before a function declaration do?',
        options: [
          'Forces the function to execute synchronously',
          'Causes the function to automatically return a Promise',
          'Converts the function into a web worker',
          'Prevents any error handling inside the function'
        ],
        correctAnswerIndex: 1,
        explanation: 'An `async` function always returns a Promise, implicitly wrapping non-promise return values.'
      },
      {
        id: 'q-4',
        questionText: 'What is a closure in JavaScript?',
        options: [
          'A method to lock object properties from being edited',
          'A function bundled together with references to its surrounding lexical state',
          'The final statement executed before a script terminates',
          'An HTML tag closing element'
        ],
        correctAnswerIndex: 1,
        explanation: 'A closure allows an inner function access to an outer function\'s scope variables even after execution.'
      },
      {
        id: 'q-5',
        questionText: 'Which keyword declares a block-scoped variable that cannot be reassigned?',
        options: ['var', 'let', 'const', 'static'],
        correctAnswerIndex: 2,
        explanation: '`const` declares block-scoped variables that cannot be reassigned after initialization.'
      }
    ]
  },
  {
    id: 'asm-2',
    skillId: 'sk-2',
    skillName: 'React.js',
    title: 'React Components & Hooks Evaluation',
    category: 'Web Development',
    durationMinutes: 10,
    totalQuestions: 5,
    passingScorePercentage: 70,
    description: 'Test your understanding of React state, props, useEffect lifecycle, and component rendering.',
    questions: [
      {
        id: 'rq-1',
        questionText: 'What hook should be used to manage side-effects like fetching data or subscribing to events?',
        options: ['useState', 'useMemo', 'useEffect', 'useCallback'],
        correctAnswerIndex: 2,
        explanation: '`useEffect` is designed for side-effects in React functional components.'
      },
      {
        id: 'rq-2',
        questionText: 'Why must React components return a single root JSX element or Fragment?',
        options: [
          'To satisfy browser HTML5 parsing rules',
          'Because React functions can only return a single value representing the virtual DOM node tree',
          'To speed up CSS animations',
          'Because state can only exist inside a div tag'
        ],
        correctAnswerIndex: 1,
        explanation: 'React components are JS functions; returning a single element or `<Fragment>` allows returning one DOM tree object.'
      },
      {
        id: 'rq-3',
        questionText: 'What is the purpose of the `key` prop when rendering lists in React?',
        options: [
          'To style individual items in CSS',
          'To help React identify which items have changed, been added, or removed efficiently',
          'To generate automatic database primary keys',
          'To encrypt component props'
        ],
        correctAnswerIndex: 1,
        explanation: '`key` props provide persistent identities to list elements for efficient DOM diffing.'
      },
      {
        id: 'rq-4',
        questionText: 'What happens when state is updated using `useState` set function?',
        options: [
          'The entire browser reloads',
          'React schedules a component re-render with the new state value',
          'The state is saved directly to local storage',
          'Nothing happens until user triggers an alert'
        ],
        correctAnswerIndex: 1,
        explanation: 'Calling a state setter updates component state and schedules a virtual DOM re-render.'
      },
      {
        id: 'rq-5',
        questionText: 'Which hook provides memoized callback functions to prevent unnecessary child re-renders?',
        options: ['useCallback', 'useRef', 'useContext', 'useReducer'],
        correctAnswerIndex: 0,
        explanation: '`useCallback` caches function instances between renders.'
      }
    ]
  },
  {
    id: 'asm-3',
    skillId: 'sk-6',
    skillName: 'Python',
    title: 'Python Essentials & Data Handling Test',
    category: 'Data & AI',
    durationMinutes: 10,
    totalQuestions: 5,
    passingScorePercentage: 70,
    description: 'Verify your Python skills in data structures, list comprehensions, modules, and file operations.',
    questions: [
      {
        id: 'pq-1',
        questionText: 'Which data structure in Python is mutable and ordered?',
        options: ['Tuple', 'List', 'Set', 'String'],
        correctAnswerIndex: 1,
        explanation: 'Lists in Python are ordered sequences that are mutable.'
      },
      {
        id: 'pq-2',
        questionText: 'What is the result of `[x * 2 for x in range(3)]`?',
        options: ['[0, 2, 4]', '[2, 4, 6]', '[0, 1, 2]', '[1, 2, 3]'],
        correctAnswerIndex: 0,
        explanation: '`range(3)` produces 0, 1, 2; multiplying by 2 yields `[0, 2, 4]`.'
      },
      {
        id: 'pq-3',
        questionText: 'How do you define a function in Python?',
        options: ['function myFunc()', 'def myFunc():', 'fn myFunc():', 'func myFunc()'],
        correctAnswerIndex: 1,
        explanation: '`def` keyword is used for function definitions in Python.'
      },
      {
        id: 'pq-4',
        questionText: 'Which dictionary method safely retrieves a value for a key without raising a KeyError?',
        options: ['dict.find()', 'dict.get()', 'dict.fetch()', 'dict.lookup()'],
        correctAnswerIndex: 1,
        explanation: '`dict.get(key, default)` returns `None` or a default value if the key does not exist.'
      },
      {
        id: 'pq-5',
        questionText: 'What keyword handles exceptions in Python code blocks?',
        options: ['try...except', 'try...catch', 'do...catch', 'begin...error'],
        correctAnswerIndex: 0,
        explanation: '`try...except` blocks catch and handle runtime exceptions in Python.'
      }
    ]
  }
];
