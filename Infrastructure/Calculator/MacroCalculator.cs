using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using Domain.UserEntities;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Infrastructure.Calculator
{
    public class MacroCalculator : IMacroCalculator
    {
        private UserStat _userStat;
        private const double KILOGRAMSPERPOUND = 0.453592;
        private const double CENTIMITERSPERFOOT = 30.48;
        private const int WEIGHTMULTIPLIER = 10;
        private const double HEIGHTMULTIPLIER = 6.25;
        private const int AGEMULTIPLIER = 5;

        public int CalculateMacros(UserStat userStat)
        {
            _userStat = userStat;
            var weight = GetWeight();
            var height = GetHeight();
            var age = GetAge();
            var genderAddition = _userStat.Gender.Multiplier;
            var activityMultiplier = _userStat.ActivityFactor.Multiplier;
            var goalAddition = _userStat.Goal.Multiplier;

            var REE = (weight * WEIGHTMULTIPLIER) + (height * HEIGHTMULTIPLIER) - (AGEMULTIPLIER * age) + genderAddition;

            var macros = (int)Math.Round((REE * activityMultiplier) / 10.0) * 10;

            return macros + goalAddition;
        }

        private double GetWeight()
        {
            double weight;
            weight = _userStat.Weight;
            if (_userStat.UnitSystem.Description == "US")
            {
                weight *= KILOGRAMSPERPOUND;
            }

            return weight;
        }

        private double GetHeight()
        {
            double height;
            height = _userStat.Height;
            if (_userStat.UnitSystem.Description == "US")
            {
                height *= CENTIMITERSPERFOOT;
            }
            return height;
        }

        private int GetAge()
        {
            var today = DateTime.Today;
            var age = today.Year - _userStat.DateOfBirth.Year;
            if (_userStat.DateOfBirth.Date > today.AddYears(-age)) age--;
            return age;

        }
    }
}
