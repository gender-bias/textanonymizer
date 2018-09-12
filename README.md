# textanonymizer
Anonymize text from stdin.

## Setup

Installation requires internet access in order to download the node modules.

```
git clone https://github.com/gender-bias/textanonymizer
yarn
```

## Usage

Once you have installed the package with the steps above, you no longer need internet access in order to redact text:

```
cat my-letter.txt | node index.js
```

## Example Usage

If the contents of `my-letter.txt` were:

```
I recommend Mollie for this job.
```

...then the script above would output:

```
I recommend PERSON_NAME for this job.
```
