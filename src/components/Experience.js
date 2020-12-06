import React from 'react';
import Card from './Card';
import CardItem from './CardItem';
import uniqid from 'uniqid';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };
  }
  render() {
    return (
      <Card
        header="Experience"
        actionIcon="fas fa-plus-circle"
        icon="fas fa-briefcase"
        body={
          <div>
            {this.state.jobs.map((job) => (
              <CardItem
                organisation={job.organisation}
                tenure={job.tenure}
                title={job.title}
                description={job.description}
                key={uniqid()}
              />
            ))}
          </div>
        }
      />
    );
  }
}

Experience.defaultProps = {
  jobs: [
    {
      organisation: 'Magic Co.',
      tenure: { start: 2017, end: 2020 },
      title: 'Senior Magician',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      organisation: 'Swindle Magicians',
      tenure: { start: 2014, end: 2017 },
      title: 'Magician',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      organisation: 'Real Magicians',
      tenure: { start: 2010, end: 2014 },
      title: 'Intern Magician',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
};

export default Experience;
