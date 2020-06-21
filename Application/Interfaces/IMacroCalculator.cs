using System;
using System.Threading.Tasks;
using Domain;
using Persistence;

namespace Application.Interfaces
{
    public interface IMacroCalculator
    {
        int CalculateMacros(UserStat userSat);
    }
}
