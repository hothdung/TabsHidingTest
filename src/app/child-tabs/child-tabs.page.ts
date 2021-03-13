import { Component } from '@angular/core';

@Component({
  selector: 'app-child-tabs',
  templateUrl: './child-tabs.page.html',
  styleUrls: ['./child-tabs.page.scss'],
})
export class ChildTabsPage {
  constructor() {}

  public ionViewWillEnter() {
    const tabBar = document.getElementById('myTabBar');
    if (tabBar.style.display !== 'none') tabBar.style.display = 'none';
  }
}
