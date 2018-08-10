import { Component } from '@angular/core';

import { Heroes } from './hero.service';

@Component({
  selector: 'hero-team-builder',
  template: `
    <div class="buttons">
      <button [disabled]="!heroes.canAdd()" (click)="heroes.addInactive()">Add inactive hero</button>
      <button [disabled]="!heroes.canAdd()" (click)="heroes.addActive()">Add active hero</button>
      <button [disabled]="!heroes.canRemove()" (click)="heroes.remove()">Remove hero</button>
    </div>
    <div class="columns">
      <div class="column">
        <h4>Basic</h4>
        <hero-list-basic [heroes]=heroes></hero-list-basic>
      </div>
      <div class="column">
        <h4>Transitions 1</h4>
        <hero-list-inline-styles [heroes]=heroes></hero-list-inline-styles>
      </div>
      <div class="column">
        <h4>Transitions 2</h4>
        <hero-list-combined-transitions [heroes]=heroes></hero-list-combined-transitions>
      </div>
      <div class="column">
        <h4>Two-way transitions</h4>
        <hero-list-twoway [heroes]=heroes></hero-list-twoway>
      </div>
      <div class="column">
        <h4>Enter & Leave</h4>
        <hero-list-enter-leave [heroes]=heroes></hero-list-enter-leave>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h4>Enter & Leave & States</h4>
        <hero-list-enter-leave-states [heroes]=heroes></hero-list-enter-leave-states>
      </div>
      <div class="column">
        <h4>Auto Style</h4>
        <hero-list-auto [heroes]=heroes></hero-list-auto>
      </div>
      <div class="column">
        <h4>Different Timings</h4>
        <hero-list-timings [heroes]=heroes></hero-list-timings>
      </div>
      <div class="column">
        <h4>Multiple Keyframes</h4>
        <hero-list-multistep [heroes]=heroes></hero-list-multistep>
      </div>
      <div class="column">
        <h4>Parallel Groups</h4>
        <hero-list-groups [heroes]=heroes></hero-list-groups>
      </div>
    </div>
  `,
  styles: [`
    .buttons {
      text-align: center;
    }
    button {
      padding: 1.5em 3em;
    }
    .columns {
      display: flex;
      flex-direction: row;
    }
    .column {
      flex: 1;
      padding: 10px;
    }
    .column p {
      min-height: 6em;
    }
  `],
  providers: [Heroes]
})
export class HeroTeamBuilderComponent {
  constructor(private heroes: Heroes) { }
}
