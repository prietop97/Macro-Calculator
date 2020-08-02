import React, { ReactElement, useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import MainNavbar from '../components/Navigation/MainNavbar';
import Recipes from '../api/spoonacularAgent';
import { MealPreview } from '../models/meals';
import MealPreviews from '../components/SearchMeals/MealPreviews';
interface Props {}

export default function SearchMeals({}: Props): ReactElement {
  const [meals, setMeals] = useState<MealPreview[]>([]);
  const [queries, setQueries] = useState({
    minFat: 10,
    maxFat: 30,
    minProtein: 10,
    maxProtein: 60,
    minCarbs: 10,
    maxCarbs: 50,
    offset: 0
  });

  useEffect(() => {
    Recipes.Recipes.search(queries)
      .then((res) => {
        console.log(res);
        const results = res.map((x) => {
          return {
            id: x.id,
            title: x.title,
            image: x.image,
            protein: Math.round(x.nutrition[0].amount),
            carbs: Math.round(x.nutrition[2].amount),
            fat: Math.round(x.nutrition[1].amount),
            calories: Math.round(
              x.nutrition[0].amount * 4 +
                x.nutrition[2].amount * 4 +
                x.nutrition[1].amount * 9
            )
          };
        });
        setMeals(results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid>
      <MainNavbar />
      <Container>
        <MealPreviews meals={meals} />
      </Container>
    </Grid>
  );
}
