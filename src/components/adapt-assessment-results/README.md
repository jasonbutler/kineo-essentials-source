adapt-results
==================

A component used to display the assessment results. Can only be used in conjunction with [adapt-contrib-assessment](https://github.com/cgkineo/adapt-contrib-assessment). Feedback and associated learning are worked out in the assessment and passed to the results component to display. Will display associated links if set up in quiz questions - will filter links so duplicate entries are displayed only once.

Associated learning is set on quiz questions in components.json. Like so:

| Attribute        | Type| Description|
| :------------ |:-------------|:-----|
| _associatedLearning  | array   | Array of associated learning ids e.g. "_associatedLearning": ["a-05"]. The learning ids can be any type of content object |

In terms of the results component, custom properties are as follows:

| Attribute        | Type| Description|
| :------------ |:-------------|:-----|
| _linkToAssociatedLearning  | bool   | Whether or not to make each displayed associated learning as a clickable hyperlink to the specified learning object |

