import { Component, Element } from '@stencil/core';
import angularApp from './angular-app';
import angular from 'angular';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true
})
export class AppRoot {
  @Element() el: HTMLElement;

  componentDidLoad() {
    angular.bootstrap(this.el, [ angularApp.name ]);
  }
  render() {
    return (
      <div ng-controller="MainCtrl">
        <header>
          <h1>Using a complex component inside angular app</h1>
        </header>
        <form ng-submit="handleSubmit($event)">
          <div>
            <label htmlFor="title">
              Job Title
            </label>
            <input type="text" id="title" ng-model="name" required />
          </div>
          <div>
            <label htmlFor="freelancerSelect">Select A Freelancer</label>
            <ent-freelancer
              id="freelancerSelect"
              ng-value="freelancer"
              ng-on-freelancerchange="handleChange($event)"
            />
          </div>

          {/* <pre ng-bind="main"></pre> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
