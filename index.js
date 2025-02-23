const core = require('@actions/core');
const github = require('@actions/github');

try {
  var humancat = require('humancat');

  const humanName = core.getInput('human-name');
  const catName = core.getInput('cat-name');

  console.log(`Hello ${humanName} and ${catName}!`);

  var hc = new humancat.Humancat(human_name=humanName, cat_name=catName);

  core.setOutput("human-name", hc.human.GetName());
  core.setOutput("human-age", hc.human.GetAge());
  core.setOutput("cat-name", hc.cat.GetName());
  core.setOutput("cat-status", hc.cat.GetStatus());

} catch (error) {
  core.setFailed(error.message);
}

