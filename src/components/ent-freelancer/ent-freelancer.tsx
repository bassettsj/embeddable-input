import { Component, State, Prop, Element, EventEmitter, Event } from '@stencil/core';

interface User {
  id: string,
  name: string,
}

const FreelancerList = ({
  selected: selectedId,
  freelancers = [],
  onSelectFreelancer
}: {
  selected: string | null,
  freelancers: User[],
  onSelectFreelancer: (id: string) => void,
}) => (
  <div class="list-group">
    {freelancers.map(freelancer => {
      let active = selectedId === `${freelancer.id}`;
      return (
        <button
          onClick={e => {
            e.preventDefault();
            onSelectFreelancer(freelancer.id);
          }}
          class={{ active, 'list-group-item-action': true, 'list-group-item': true }}
        >
          {freelancer.name}
        </button>
      );
    })}
  </div>
);

@Component({
  tag: 'ent-freelancer',
  styleUrl: './ent-freelancer.css',
  shadow: true,
})
export class Entfreelancer {
  @Element() el: HTMLElement;
  @Prop() value: string = '';
  @State() freelancers: User[] = [];
  @Event() freelancerchange: EventEmitter;

  async componentDidLoad() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    this.freelancers = await res.json();
  }

  selectFreelancer = (id) => {
    this.freelancerchange.emit({ id  });
  }

  render() {
    if (this.freelancers) return (
      <FreelancerList
        onSelectFreelancer={this.selectFreelancer}
        freelancers={this.freelancers}
        selected={this.value}
      />
    );
  }
}
