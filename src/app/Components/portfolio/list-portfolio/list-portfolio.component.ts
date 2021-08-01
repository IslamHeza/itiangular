import { Component, OnInit } from '@angular/core';
import { FreelancerPortfolio } from 'src/app/_models/freelancer-portfolio';

@Component({
  selector: 'app-list-portfolio',
  templateUrl: './list-portfolio.component.html',
  styleUrls: ['./list-portfolio.component.css']
})

export class ListPortfolioComponent implements OnInit {
  constructor() { }
  
  //data
  freelancerName:string='John Do';
  portfolioList:FreelancerPortfolio[] =[ ]
  
  ngOnInit(): void {
    this.portfolioList=[
      new FreelancerPortfolio(1,"Project1 Title","description 1 test test ", "assets/portfolio1.jpg"),
      new FreelancerPortfolio(2,"Project2 Title","description 2 test test ", "assets/portfolio2.jpg"),
      new FreelancerPortfolio(3,"Project3 Title","description 3 test test ", "assets/portfolio3.jpg"),
      new FreelancerPortfolio(1,"Project1 Title","description 1 test test ", "assets/portfolio1.jpg"),
      new FreelancerPortfolio(2,"Project2 Title","description 2 test test ", "assets/portfolio2.jpg"),
      new FreelancerPortfolio(3,"Project3 Title","description 3 test test ", "assets/portfolio3.jpg"),
    ];
  }








}

