using System;
using System.Threading.Tasks;
using Domain;
using Domain.UserEntities;
using Persistence;

namespace Application.Interfaces
{
    public interface IMacroCalculator
    {
        Macros CalculateMacros(UserStat userSat);
    }
    public class Macros
    {
        public int FatGrams { get; set; }
        public int CarbsGrams { get; set; }
        public int ProteinGrams { get; set; }
        public int Calories { get; set; }
    }
}
