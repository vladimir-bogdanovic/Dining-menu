import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CallingService } from 'src/app/services/calling.service';
import {
  CategoryMealsInterface,
  SingleCategoryMealInterface,
} from 'src/app/types/category-meals';
import { mealsDetailsInterface } from 'src/app/types/meal-details';

@Component({
  selector: 'app-category-meals',
  templateUrl: './category-meals.component.html',
  styleUrls: ['./category-meals.component.css'],
})
export class CategoryMealsComponent implements OnInit {
  param!: string;
  categoryMeals!: SingleCategoryMealInterface[];
  mealDetail!: SingleCategoryMealInterface;
  mealSelected = false;

  constructor(
    private callingService: CallingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.param = params.food;
    });

    this.callingService
      .getCategoryMeals(this.param)
      .subscribe((resData: CategoryMealsInterface) => {
        this.categoryMeals = resData.meals;
      });
  }

  checkMealDetails(id: string) {
    this.mealSelected = true;
    this.callingService
      .getMealDetails(id)
      .subscribe((resData: mealsDetailsInterface) => {
        console.log(resData);
        this.mealDetail = resData.meals[0];
      });
  }
}
