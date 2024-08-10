let questions = [];
let currentQuestion = 0;
let timer;
let timeLeft;

document.getElementById('startQuiz').onclick = startQuiz;

function startQuiz() {
    const topic = document.getElementById('topic').value;
    const difficulty = document.getElementById('difficulty').value;

    if (!topic || !difficulty) {
        alert('Please select both a topic and difficulty level.');
        return;
    }

    // Setup quiz data based on the selected topic and difficulty
    setupQuestions(topic, difficulty);
    shuffleQuestions();
    displayQuizInfo(topic, difficulty);

    document.getElementById('home').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    
    startQuestion();
}

function setupQuestions(topic, difficulty) {
    questions = [];
    
    const questionData = {
        squares: {
            easy: [
                { question: 'What is 1²?', answer: 1, options: [1, 2, 3, 4] },
                { question: 'What is 2²?', answer: 4, options: [2, 4, 8, 16] },
                { question: 'What is 3²?', answer: 9, options: [6, 9, 12, 15] },
                { question: 'What is 4²?', answer: 16, options: [12, 16, 20, 25] },
                { question: 'What is 5²?', answer: 25, options: [20, 25, 30, 35] },
                { question: 'What is 6²?', answer: 36, options: [30, 36, 42, 48] },
                { question: 'What is 7²?', answer: 49, options: [42, 49, 56, 63] },
                { question: 'What is 8²?', answer: 64, options: [56, 64, 72, 80] },
                { question: 'What is 9²?', answer: 81, options: [72, 81, 90, 99] },
                { question: 'What is 10²?', answer: 100, options: [90, 100, 110, 120] },
                { question: 'What is 11²?', answer: 121, options: [110, 121, 132, 144] },
                { question: 'What is 12²?', answer: 144, options: [132, 144, 156, 168] },
                { question: 'What is 13²?', answer: 169, options: [156, 169, 182, 195] },
                { question: 'What is 14²?', answer: 196, options: [182, 196, 210, 224] },
                { question: 'What is 15²?', answer: 225, options: [210, 225, 240, 255] },
                { question: 'What is 16²?', answer: 256, options: [240, 256, 272, 288] },
                { question: 'What is 17²?', answer: 289, options: [272, 289, 306, 323] },
                { question: 'What is 18²?', answer: 324, options: [306, 324, 342, 360] },
                { question: 'What is 19²?', answer: 361, options: [342, 361, 380, 399] },
                { question: 'What is 20²?', answer: 400, options: [380, 400, 420, 440] },
                { question: 'What is 21²?', answer: 441, options: [420, 441, 462, 483] },
                { question: 'What is 22²?', answer: 484, options: [462, 484, 506, 528] },
                { question: 'What is 23²?', answer: 529, options: [506, 529, 552, 575] },
                { question: 'What is 24²?', answer: 576, options: [552, 576, 600, 624] },
                { question: 'What is 25²?', answer: 625, options: [600, 625, 650, 675] },
                { question: 'What is 26²?', answer: 676, options: [650, 676, 702, 728] },
                { question: 'What is 27²?', answer: 729, options: [702, 729, 756, 783] },
                { question: 'What is 28²?', answer: 784, options: [756, 784, 812, 840] },
                { question: 'What is 29²?', answer: 841, options: [812, 841, 870, 899] },
                { question: 'What is 30²?', answer: 900, options: [870, 900, 930, 960] },
                // Add more questions up to 30 squares for easy difficulty
            ],
            moderate: [
                { question: 'What is 31²?', answer: 961, options: [961, 900, 1024, 999] },
                { question: 'What is 32²?', answer: 1024, options: [961, 1024, 1089, 1156] },
                { question: 'What is 33²?', answer: 1089, options: [1024, 1089, 1156, 1225] },
                { question: 'What is 34²?', answer: 1156, options: [1089, 1156, 1225, 1296] },
                { question: 'What is 35²?', answer: 1225, options: [1156, 1225, 1296, 1369] },
                { question: 'What is 36²?', answer: 1296, options: [1225, 1296, 1369, 1444] },
                { question: 'What is 37²?', answer: 1369, options: [1296, 1369, 1444, 1521] },
                { question: 'What is 38²?', answer: 1444, options: [1369, 1444, 1521, 1600] },
                { question: 'What is 39²?', answer: 1521, options: [1444, 1521, 1600, 1681] },
                { question: 'What is 40²?', answer: 1600, options: [1521, 1600, 1681, 1764] },
                { question: 'What is 41²?', answer: 1681, options: [1600, 1681, 1764, 1849] },
                { question: 'What is 42²?', answer: 1764, options: [1681, 1764, 1849, 1936] },
                { question: 'What is 43²?', answer: 1849, options: [1764, 1849, 1936, 2025] },
                { question: 'What is 44²?', answer: 1936, options: [1849, 1936, 2025, 2116] },
                { question: 'What is 45²?', answer: 2025, options: [1936, 2025, 2116, 2209] },
                { question: 'What is 46²?', answer: 2116, options: [2025, 2116, 2209, 2304] },
                { question: 'What is 47²?', answer: 2209, options: [2116, 2209, 2304, 2401] },
                { question: 'What is 48²?', answer: 2304, options: [2209, 2304, 2401, 2500] },
                { question: 'What is 49²?', answer: 2401, options: [2304, 2401, 2500, 2601] },
                { question: 'What is 50²?', answer: 2500, options: [2401, 2500, 2601, 2704] },
                // Add more questions up to 50 squares for Moderate difficulty
            ],
            hard: [
                { question: 'What is 51²?', answer: 2601, options: [2601, 2500, 2809, 2700] },
                { question: 'What is 52²?', answer: 2704, options: [2601, 2704, 2809, 2900] },
                { question: 'What is 53²?', answer: 2809, options: [2704, 2809, 2900, 3000] },
                { question: 'What is 54²?', answer: 2916, options: [2809, 2916, 3000, 3100] },
                { question: 'What is 55²?', answer: 3025, options: [2916, 3025, 3100, 3200] },
                { question: 'What is 56²?', answer: 3136, options: [3025, 3136, 3200, 3300] },
                { question: 'What is 57²?', answer: 3249, options: [3136, 3249, 3300, 3400] },
                { question: 'What is 58²?', answer: 3364, options: [3249, 3364, 3400, 3500] },
                { question: 'What is 59²?', answer: 3481, options: [3364, 3481, 3600, 3700] },
                { question: 'What is 60²?', answer: 3600, options: [3481, 3600, 3700, 3800] },
                { question: 'What is 61²?', answer: 3721, options: [3600, 3721, 3800, 3900] },
                { question: 'What is 62²?', answer: 3844, options: [3721, 3844, 3900, 4000] },
                { question: 'What is 63²?', answer: 3969, options: [3844, 3969, 4000, 4100] },
                { question: 'What is 64²?', answer: 4096, options: [3969, 4096, 4100, 4200] },
                { question: 'What is 65²?', answer: 4225, options: [4096, 4225, 4200, 4300] },
                { question: 'What is 66²?', answer: 4356, options: [4225, 4356, 4300, 4400] },
                { question: 'What is 67²?', answer: 4489, options: [4356, 4489, 4400, 4500] },
                { question: 'What is 68²?', answer: 4624, options: [4489, 4624, 4500, 4600] },
                { question: 'What is 69²?', answer: 4761, options: [4624, 4761, 4600, 4700] },
                { question: 'What is 70²?', answer: 4900, options: [4761, 4900, 4700, 4800] },
                { question: 'What is 71²?', answer: 5041, options: [4900, 5041, 4800, 4900] },
                { question: 'What is 72²?', answer: 5184, options: [5041, 5184, 4900, 5000] },
                { question: 'What is 73²?', answer: 5329, options: [5184, 5329, 5000, 5100] },
                { question: 'What is 74²?', answer: 5476, options: [5329, 5476, 5100, 5200] },
                { question: 'What is 75²?', answer: 5625, options: [5476, 5625, 5200, 5300] },
                { question: 'What is 76²?', answer: 5776, options: [5625, 5776, 5300, 5400] },
                { question: 'What is 77²?', answer: 5929, options: [5776, 5929, 5400, 5500] },
                { question: 'What is 78²?', answer: 6084, options: [5929, 6084, 5500, 5600] },
                { question: 'What is 79²?', answer: 6241, options: [6084, 6241, 5600, 5700] },
                { question: 'What is 80²?', answer: 6400, options: [6241, 6400, 5700, 5800] },
                { question: 'What is 81²?', answer: 6561, options: [6400, 6561, 5800, 5900] },
                { question: 'What is 82²?', answer: 6724, options: [6561, 6724, 5900, 6000] },
                { question: 'What is 83²?', answer: 6889, options: [6724, 6889, 6000, 6100] },
                { question: 'What is 84²?', answer: 7056, options: [6889, 7056, 6100, 6200] },
                { question: 'What is 85²?', answer: 7225, options: [7056, 7225, 6200, 6300] },
                { question: 'What is 86²?', answer: 7396, options: [7225, 7396, 6300, 6400] },
                { question: 'What is 87²?', answer: 7569, options: [7396, 7569, 6400, 6500] },
                { question: 'What is 88²?', answer: 7744, options: [7569, 7744, 6500, 6600] },
                { question: 'What is 89²?', answer: 7921, options: [7744, 7921, 6600, 6700] },
                { question: 'What is 90²?', answer: 8100, options: [7921, 8100, 6700, 6800] },
                { question: 'What is 91²?', answer: 8281, options: [8100, 8281, 6800, 6900] },
                { question: 'What is 92²?', answer: 8464, options: [8281, 8464, 6900, 7000] },
                { question: 'What is 93²?', answer: 8649, options: [8464, 8649, 7000, 7100] },
                { question: 'What is 94²?', answer: 8836, options: [8649, 8836, 7100, 7200] },
                { question: 'What is 95²?', answer: 9025, options: [8836, 9025, 7200, 7300] },
                { question: 'What is 96²?', answer: 9216, options: [9025, 9216, 7300, 7400] },
                { question: 'What is 97²?', answer: 9409, options: [9216, 9409, 7400, 7500] },
                { question: 'What is 98²?', answer: 9604, options: [9409, 9604, 7500, 7600] },
                { question: 'What is 99²?', answer: 9801, options: [9604, 9801, 7600, 7700] },
                { question: 'What is 100²?', answer: 10000, options: [9801, 10000, 7700, 7800] }
                // Add more questions up to 100 squares for Hard difficulty
            ]
        },
        cubes: {
            easy: [
                { question: 'What is 1³?', answer: 1, options: [1, 2, 3, 4] },
                { question: 'What is 2³?', answer: 8, options: [6, 8, 10, 12] },
                { question: 'What is 3³?', answer: 27, options: [20, 27, 30, 33] },
                { question: 'What is 4³?', answer: 64, options: [60, 64, 68, 72] },
                { question: 'What is 5³?', answer: 125, options: [120, 125, 130, 135] },
                { question: 'What is 6³?', answer: 216, options: [200, 216, 230, 245] },
                { question: 'What is 7³?', answer: 343, options: [320, 343, 360, 378] },
                { question: 'What is 8³?', answer: 512, options: [480, 512, 540, 560] },
                { question: 'What is 9³?', answer: 729, options: [700, 729, 750, 780] },
                { question: 'What is 10³?', answer: 1000, options: [950, 1000, 1050, 1100] },
                // Add more questions up to 10³ for Easy difficulty
            ],
            moderate: [
                { question: 'What is 11³?', answer: 1331, options: [1300, 1331, 1360, 1400] },
                { question: 'What is 12³?', answer: 1728, options: [1700, 1728, 1750, 1800] },
                { question: 'What is 13³?', answer: 2197, options: [2150, 2197, 2250, 2300] },
                { question: 'What is 14³?', answer: 2744, options: [2700, 2744, 2800, 2850] },
                { question: 'What is 15³?', answer: 3375, options: [3300, 3375, 3450, 3500] },
                { question: 'What is 16³?', answer: 4096, options: [4000, 4096, 4200, 4300] },
                { question: 'What is 17³?', answer: 4913, options: [4800, 4913, 5000, 5100] },
                { question: 'What is 18³?', answer: 5832, options: [5700, 5832, 5900, 6000] },
                { question: 'What is 19³?', answer: 6859, options: [6700, 6859, 6900, 7000] },
                { question: 'What is 20³?', answer: 8000, options: [7800, 8000, 8200, 8400] },
                // Add more questions up to 30³ for Moderate difficulty
            ],
            hard: [
                { question: 'What is 31³?', answer: 29791, options: [29000, 29791, 30000, 31000] },
                { question: 'What is 32³?', answer: 32768, options: [32000, 32768, 33000, 34000] },
                { question: 'What is 33³?', answer: 35937, options: [35000, 35937, 36000, 37000] },
                { question: 'What is 34³?', answer: 39304, options: [38000, 39304, 40000, 41000] },
                { question: 'What is 35³?', answer: 42875, options: [42000, 42875, 43000, 44000] },
                { question: 'What is 36³?', answer: 46656, options: [45000, 46656, 47000, 48000] },
                { question: 'What is 37³?', answer: 50653, options: [49000, 50653, 51000, 52000] },
                { question: 'What is 38³?', answer: 54872, options: [53000, 54872, 55000, 56000] },
                { question: 'What is 39³?', answer: 59319, options: [58000, 59319, 60000, 61000] },
                { question: 'What is 40³?', answer: 64000, options: [62000, 64000, 65000, 66000] },
                // Add more questions up to 50³ for Hard difficulty
            ]
        },
        multiplication: {
            easy: [
                { question: 'What is 1 × 1?', answer: 1, options: [1, 2, 3, 4] },
        { question: 'What is 1 × 2?', answer: 2, options: [2, 3, 4, 5] },
        { question: 'What is 1 × 3?', answer: 3, options: [3, 4, 5, 6] },
        { question: 'What is 1 × 4?', answer: 4, options: [4, 5, 6, 7] },
        { question: 'What is 1 × 5?', answer: 5, options: [5, 6, 7, 8] },
        { question: 'What is 1 × 6?', answer: 6, options: [6, 7, 8, 9] },
        { question: 'What is 1 × 7?', answer: 7, options: [7, 8, 9, 10] },
        { question: 'What is 1 × 8?', answer: 8, options: [8, 9, 10, 11] },
        { question: 'What is 1 × 9?', answer: 9, options: [9, 10, 11, 12] },
        { question: 'What is 1 × 10?', answer: 10, options: [10, 11, 12, 13] },
        
        { question: 'What is 2 × 1?', answer: 2, options: [2, 3, 4, 5] },
        { question: 'What is 2 × 2?', answer: 4, options: [2, 4, 6, 8] },
        { question: 'What is 2 × 3?', answer: 6, options: [6, 7, 8, 9] },
        { question: 'What is 2 × 4?', answer: 8, options: [8, 9, 10, 12] },
        { question: 'What is 2 × 5?', answer: 10, options: [10, 12, 14, 16] },
        { question: 'What is 2 × 6?', answer: 12, options: [12, 14, 16, 18] },
        { question: 'What is 2 × 7?', answer: 14, options: [14, 16, 18, 20] },
        { question: 'What is 2 × 8?', answer: 16, options: [16, 18, 20, 22] },
        { question: 'What is 2 × 9?', answer: 18, options: [18, 20, 22, 24] },
        { question: 'What is 2 × 10?', answer: 20, options: [20, 22, 24, 26] },
        
        { question: 'What is 3 × 1?', answer: 3, options: [3, 4, 5, 6] },
        { question: 'What is 3 × 2?', answer: 6, options: [6, 7, 8, 9] },
        { question: 'What is 3 × 3?', answer: 9, options: [9, 10, 11, 12] },
        { question: 'What is 3 × 4?', answer: 12, options: [12, 13, 14, 15] },
        { question: 'What is 3 × 5?', answer: 15, options: [15, 16, 17, 18] },
        { question: 'What is 3 × 6?', answer: 18, options: [18, 19, 20, 21] },
        { question: 'What is 3 × 7?', answer: 21, options: [21, 22, 23, 24] },
        { question: 'What is 3 × 8?', answer: 24, options: [24, 25, 26, 27] },
        { question: 'What is 3 × 9?', answer: 27, options: [27, 28, 29, 30] },
        { question: 'What is 3 × 10?', answer: 30, options: [30, 31, 32, 33] },
        
        { question: 'What is 4 × 1?', answer: 4, options: [4, 5, 6, 7] },
        { question: 'What is 4 × 2?', answer: 8, options: [8, 9, 10, 11] },
        { question: 'What is 4 × 3?', answer: 12, options: [12, 13, 14, 15] },
        { question: 'What is 4 × 4?', answer: 16, options: [16, 17, 18, 19] },
        { question: 'What is 4 × 5?', answer: 20, options: [20, 21, 22, 23] },
        { question: 'What is 4 × 6?', answer: 24, options: [24, 25, 26, 27] },
        { question: 'What is 4 × 7?', answer: 28, options: [28, 29, 30, 31] },
        { question: 'What is 4 × 8?', answer: 32, options: [32, 33, 34, 35] },
        { question: 'What is 4 × 9?', answer: 36, options: [36, 37, 38, 39] },
        { question: 'What is 4 × 10?', answer: 40, options: [40, 41, 42, 43] },
        
        { question: 'What is 5 × 1?', answer: 5, options: [5, 6, 7, 8] },
        { question: 'What is 5 × 2?', answer: 10, options: [10, 11, 12, 13] },
        { question: 'What is 5 × 3?', answer: 15, options: [15, 16, 17, 18] },
        { question: 'What is 5 × 4?', answer: 20, options: [20, 21, 22, 23] },
        { question: 'What is 5 × 5?', answer: 25, options: [25, 26, 27, 28] },
        { question: 'What is 5 × 6?', answer: 30, options: [30, 31, 32, 33] },
        { question: 'What is 5 × 7?', answer: 35, options: [35, 36, 37, 38] },
        { question: 'What is 5 × 8?', answer: 40, options: [40, 41, 42, 43] },
        { question: 'What is 5 × 9?', answer: 45, options: [45, 46, 47, 48] },
        { question: 'What is 5 × 10?', answer: 50, options: [50, 51, 52, 53] },
        
        { question: 'What is 6 × 1?', answer: 6, options: [6, 7, 8, 9] },
        { question: 'What is 6 × 2?', answer: 12, options: [12, 13, 14, 15] },
        { question: 'What is 6 × 3?', answer: 18, options: [18, 19, 20, 21] },
        { question: 'What is 6 × 4?', answer: 24, options: [24, 25, 26, 27] },
        { question: 'What is 6 × 5?', answer: 30, options: [30, 31, 32, 33] },
        { question: 'What is 6 × 6?', answer: 36, options: [36, 37, 38, 39] },
        { question: 'What is 6 × 7?', answer: 42, options: [42, 43, 44, 45] },
        { question: 'What is 6 × 8?', answer: 48, options: [48, 49, 50, 51] },
        { question: 'What is 6 × 9?', answer: 54, options: [54, 55, 56, 57] },
        { question: 'What is 6 × 10?', answer: 60, options: [60, 61, 62, 63] },
        
        { question: 'What is 7 × 1?', answer: 7, options: [7, 8, 9, 10] },
        { question: 'What is 7 × 2?', answer: 14, options: [14, 15, 16, 17] },
        { question: 'What is 7 × 3?', answer: 21, options: [21, 22, 23, 24] },
        { question: 'What is 7 × 4?', answer: 28, options: [28, 29, 30, 31] },
        { question: 'What is 7 × 5?', answer: 35, options: [35, 36, 37, 38] },
        { question: 'What is 7 × 6?', answer: 42, options: [42, 43, 44, 45] },
        { question: 'What is 7 × 7?', answer: 49, options: [49, 50, 51, 52] },
        { question: 'What is 7 × 8?', answer: 56, options: [56, 57, 58, 59] },
        { question: 'What is 7 × 9?', answer: 63, options: [63, 64, 65, 66] },
        { question: 'What is 7 × 10?', answer: 70, options: [70, 71, 72, 73] },
        
        { question: 'What is 8 × 1?', answer: 8, options: [8, 9, 10, 11] },
        { question: 'What is 8 × 2?', answer: 16, options: [16, 17, 18, 19] },
        { question: 'What is 8 × 3?', answer: 24, options: [24, 25, 26, 27] },
        { question: 'What is 8 × 4?', answer: 32, options: [32, 33, 34, 35] },
        { question: 'What is 8 × 5?', answer: 40, options: [40, 41, 42, 43] },
        { question: 'What is 8 × 6?', answer: 48, options: [48, 49, 50, 51] },
        { question: 'What is 8 × 7?', answer: 56, options: [56, 57, 58, 59] },
        { question: 'What is 8 × 8?', answer: 64, options: [64, 65, 66, 67] },
        { question: 'What is 8 × 9?', answer: 72, options: [72, 73, 74, 75] },
        { question: 'What is 8 × 10?', answer: 80, options: [80, 81, 82, 83] },
        
        { question: 'What is 9 × 1?', answer: 9, options: [9, 10, 11, 12] },
        { question: 'What is 9 × 2?', answer: 18, options: [18, 19, 20, 21] },
        { question: 'What is 9 × 3?', answer: 27, options: [27, 28, 29, 30] },
        { question: 'What is 9 × 4?', answer: 36, options: [36, 37, 38, 39] },
        { question: 'What is 9 × 5?', answer: 45, options: [45, 46, 47, 48] },
        { question: 'What is 9 × 6?', answer: 54, options: [54, 55, 56, 57] },
        { question: 'What is 9 × 7?', answer: 63, options: [63, 64, 65, 66] },
        { question: 'What is 9 × 8?', answer: 72, options: [72, 73, 74, 75] },
        { question: 'What is 9 × 9?', answer: 81, options: [81, 82, 83, 84] },
        { question: 'What is 9 × 10?', answer: 90, options: [90, 91, 92, 93] },
        
        { question: 'What is 10 × 1?', answer: 10, options: [10, 11, 12, 13] },
        { question: 'What is 10 × 2?', answer: 20, options: [20, 21, 22, 23] },
        { question: 'What is 10 × 3?', answer: 30, options: [30, 31, 32, 33] },
        { question: 'What is 10 × 4?', answer: 40, options: [40, 41, 42, 43] },
        { question: 'What is 10 × 5?', answer: 50, options: [50, 51, 52, 53] },
        { question: 'What is 10 × 6?', answer: 60, options: [60, 61, 62, 63] },
        { question: 'What is 10 × 7?', answer: 70, options: [70, 71, 72, 73] },
        { question: 'What is 10 × 8?', answer: 80, options: [80, 81, 82, 83] },
        { question: 'What is 10 × 9?', answer: 90, options: [90, 91, 92, 93] },
        { question: 'What is 10 × 10?', answer: 100, options: [100, 101, 102, 103] }
            ],
            moderate: [
                { question: 'What is 11 × 1?', answer: 11, options: [11, 12, 13, 14] },
    { question: 'What is 11 × 2?', answer: 22, options: [20, 22, 24, 26] },
    { question: 'What is 11 × 3?', answer: 33, options: [30, 32, 33, 36] },
    { question: 'What is 11 × 4?', answer: 44, options: [40, 42, 44, 46] },
    { question: 'What is 11 × 5?', answer: 55, options: [50, 55, 60, 65] },
    { question: 'What is 11 × 6?', answer: 66, options: [60, 66, 72, 78] },
    { question: 'What is 11 × 7?', answer: 77, options: [70, 77, 84, 91] },
    { question: 'What is 11 × 8?', answer: 88, options: [80, 88, 96, 104] },
    { question: 'What is 11 × 9?', answer: 99, options: [90, 99, 108, 117] },
    { question: 'What is 11 × 10?', answer: 110, options: [100, 110, 120, 130] },
    { question: 'What is 11 × 11?', answer: 121, options: [121, 111, 100, 131] },
    { question: 'What is 11 × 12?', answer: 132, options: [120, 132, 144, 156] },
    { question: 'What is 11 × 13?', answer: 143, options: [130, 143, 156, 169] },
    { question: 'What is 11 × 14?', answer: 154, options: [140, 154, 168, 182] },
    { question: 'What is 11 × 15?', answer: 165, options: [150, 165, 180, 195] },
    { question: 'What is 11 × 16?', answer: 176, options: [160, 176, 192, 208] },
    { question: 'What is 11 × 17?', answer: 187, options: [170, 187, 204, 221] },
    { question: 'What is 11 × 18?', answer: 198, options: [180, 198, 216, 234] },
    { question: 'What is 11 × 19?', answer: 209, options: [190, 209, 228, 247] },
    { question: 'What is 11 × 20?', answer: 220, options: [200, 220, 240, 260] },

    { question: 'What is 12 × 1?', answer: 12, options: [12, 14, 16, 18] },
    { question: 'What is 12 × 2?', answer: 24, options: [20, 22, 24, 26] },
    { question: 'What is 12 × 3?', answer: 36, options: [30, 34, 36, 38] },
    { question: 'What is 12 × 4?', answer: 48, options: [40, 44, 48, 52] },
    { question: 'What is 12 × 5?', answer: 60, options: [50, 55, 60, 65] },
    { question: 'What is 12 × 6?', answer: 72, options: [60, 66, 72, 78] },
    { question: 'What is 12 × 7?', answer: 84, options: [70, 77, 84, 91] },
    { question: 'What is 12 × 8?', answer: 96, options: [80, 88, 96, 104] },
    { question: 'What is 12 × 9?', answer: 108, options: [90, 99, 108, 117] },
    { question: 'What is 12 × 10?', answer: 120, options: [100, 110, 120, 130] },
    { question: 'What is 12 × 11?', answer: 132, options: [120, 132, 144, 156] },
    { question: 'What is 12 × 12?', answer: 144, options: [132, 144, 156, 168] },
    { question: 'What is 12 × 13?', answer: 156, options: [143, 156, 169, 182] },
    { question: 'What is 12 × 14?', answer: 168, options: [154, 168, 182, 196] },
    { question: 'What is 12 × 15?', answer: 180, options: [165, 180, 195, 210] },
    { question: 'What is 12 × 16?', answer: 192, options: [176, 192, 208, 224] },
    { question: 'What is 12 × 17?', answer: 204, options: [187, 204, 221, 238] },
    { question: 'What is 12 × 18?', answer: 216, options: [198, 216, 234, 252] },
    { question: 'What is 12 × 19?', answer: 228, options: [209, 228, 247, 266] },
    { question: 'What is 12 × 20?', answer: 240, options: [220, 240, 260, 280] },

    { question: 'What is 13 × 1?', answer: 13, options: [13, 14, 15, 16] },
    { question: 'What is 13 × 2?', answer: 26, options: [26, 27, 28, 29] },
    { question: 'What is 13 × 3?', answer: 39, options: [39, 40, 41, 42] },
    { question: 'What is 13 × 4?', answer: 52, options: [52, 53, 54, 55] },
    { question: 'What is 13 × 5?', answer: 65, options: [65, 66, 67, 68] },
    { question: 'What is 13 × 6?', answer: 78, options: [78, 79, 80, 81] },
    { question: 'What is 13 × 7?', answer: 91, options: [91, 92, 93, 94] },
    { question: 'What is 13 × 8?', answer: 104, options: [104, 105, 106, 107] },
    { question: 'What is 13 × 9?', answer: 117, options: [117, 118, 119, 120] },
    { question: 'What is 13 × 10?', answer: 130, options: [130, 131, 132, 133] },
    { question: 'What is 13 × 11?', answer: 143, options: [143, 144, 145, 146] },
    { question: 'What is 13 × 12?', answer: 156, options: [156, 157, 158, 159] },
    { question: 'What is 13 × 13?', answer: 169, options: [169, 170, 171, 172] },
    { question: 'What is 13 × 14?', answer: 182, options: [182, 183, 184, 185] },
    { question: 'What is 13 × 15?', answer: 195, options: [195, 196, 197, 198] },
    { question: 'What is 13 × 16?', answer: 208, options: [208, 209, 210, 211] },
    { question: 'What is 13 × 17?', answer: 221, options: [221, 222, 223, 224] },
    { question: 'What is 13 × 18?', answer: 234, options: [234, 235, 236, 237] },
    { question: 'What is 13 × 19?', answer: 247, options: [247, 248, 249, 250] },
    { question: 'What is 13 × 20?', answer: 260, options: [260, 261, 262, 263] },

    { question: 'What is 14 × 1?', answer: 14, options: [14, 15, 16, 17] },
    { question: 'What is 14 × 2?', answer: 28, options: [28, 29, 30, 31] },
    { question: 'What is 14 × 3?', answer: 42, options: [42, 43, 44, 45] },
    { question: 'What is 14 × 4?', answer: 56, options: [56, 57, 58, 59] },
    { question: 'What is 14 × 5?', answer: 70, options: [70, 71, 72, 73] },
    { question: 'What is 14 × 6?', answer: 84, options: [84, 85, 86, 87] },
    { question: 'What is 14 × 7?', answer: 98, options: [98, 99, 100, 101] },
    { question: 'What is 14 × 8?', answer: 112, options: [112, 113, 114, 115] },
    { question: 'What is 14 × 9?', answer: 126, options: [126, 127, 128, 129] },
    { question: 'What is 14 × 10?', answer: 140, options: [140, 141, 142, 143] },
    { question: 'What is 14 × 11?', answer: 154, options: [154, 155, 156, 157] },
    { question: 'What is 14 × 12?', answer: 168, options: [168, 169, 170, 171] },
    { question: 'What is 14 × 13?', answer: 182, options: [182, 183, 184, 185] },
    { question: 'What is 14 × 14?', answer: 196, options: [196, 197, 198, 199] },
    { question: 'What is 14 × 15?', answer: 210, options: [210, 211, 212, 213] },
    { question: 'What is 14 × 16?', answer: 224, options: [224, 225, 226, 227] },
    { question: 'What is 14 × 17?', answer: 238, options: [238, 239, 240, 241] },
    { question: 'What is 14 × 18?', answer: 252, options: [252, 253, 254, 255] },
    { question: 'What is 14 × 19?', answer: 266, options: [266, 267, 268, 269] },
    { question: 'What is 14 × 20?', answer: 280, options: [280, 281, 282, 283] },

    { question: 'What is 15 × 1?', answer: 15, options: [15, 16, 17, 18] },
    { question: 'What is 15 × 2?', answer: 30, options: [30, 31, 32, 33] },
    { question: 'What is 15 × 3?', answer: 45, options: [45, 46, 47, 48] },
    { question: 'What is 15 × 4?', answer: 60, options: [60, 61, 62, 63] },
    { question: 'What is 15 × 5?', answer: 75, options: [75, 76, 77, 78] },
    { question: 'What is 15 × 6?', answer: 90, options: [90, 91, 92, 93] },
    { question: 'What is 15 × 7?', answer: 105, options: [105, 106, 107, 108] },
    { question: 'What is 15 × 8?', answer: 120, options: [120, 121, 122, 123] },
    { question: 'What is 15 × 9?', answer: 135, options: [135, 136, 137, 138] },
    { question: 'What is 15 × 10?', answer: 150, options: [150, 151, 152, 153] },
    { question: 'What is 15 × 11?', answer: 165, options: [165, 166, 167, 168] },
    { question: 'What is 15 × 12?', answer: 180, options: [180, 181, 182, 183] },
    { question: 'What is 15 × 13?', answer: 195, options: [195, 196, 197, 198] },
    { question: 'What is 15 × 14?', answer: 210, options: [210, 211, 212, 213] },
    { question: 'What is 15 × 15?', answer: 225, options: [225, 226, 227, 228] },
    { question: 'What is 15 × 16?', answer: 240, options: [240, 241, 242, 243] },
    { question: 'What is 15 × 17?', answer: 255, options: [255, 256, 257, 258] },
    { question: 'What is 15 × 18?', answer: 270, options: [270, 271, 272, 273] },
    { question: 'What is 15 × 19?', answer: 285, options: [285, 286, 287, 288] },
    { question: 'What is 15 × 20?', answer: 300, options: [300, 301, 302, 303] },

    { question: 'What is 16 × 1?', answer: 16, options: [16, 17, 18, 19] },
    { question: 'What is 16 × 2?', answer: 32, options: [32, 33, 34, 35] },
    { question: 'What is 16 × 3?', answer: 48, options: [48, 49, 50, 51] },
    { question: 'What is 16 × 4?', answer: 64, options: [64, 65, 66, 67] },
    { question: 'What is 16 × 5?', answer: 80, options: [80, 81, 82, 83] },
    { question: 'What is 16 × 6?', answer: 96, options: [96, 97, 98, 99] },
    { question: 'What is 16 × 7?', answer: 112, options: [112, 113, 114, 115] },
    { question: 'What is 16 × 8?', answer: 128, options: [128, 129, 130, 131] },
    { question: 'What is 16 × 9?', answer: 144, options: [144, 145, 146, 147] },
    { question: 'What is 16 × 10?', answer: 160, options: [160, 161, 162, 163] },
    { question: 'What is 16 × 11?', answer: 176, options: [176, 177, 178, 179] },
    { question: 'What is 16 × 12?', answer: 192, options: [192, 193, 194, 195] },
    { question: 'What is 16 × 13?', answer: 208, options: [208, 209, 210, 211] },
    { question: 'What is 16 × 14?', answer: 224, options: [224, 225, 226, 227] },
    { question: 'What is 16 × 15?', answer: 240, options: [240, 241, 242, 243] },
    { question: 'What is 16 × 16?', answer: 256, options: [256, 257, 258, 259] },
    { question: 'What is 16 × 17?', answer: 272, options: [272, 273, 274, 275] },
    { question: 'What is 16 × 18?', answer: 288, options: [288, 289, 290, 291] },
    { question: 'What is 16 × 19?', answer: 304, options: [304, 305, 306, 307] },
    { question: 'What is 16 × 20?', answer: 320, options: [320, 321, 322, 323] },

    { question: 'What is 17 × 1?', answer: 17, options: [17, 18, 19, 20] },
    { question: 'What is 17 × 2?', answer: 34, options: [34, 35, 36, 37] },
    { question: 'What is 17 × 3?', answer: 51, options: [51, 52, 53, 54] },
    { question: 'What is 17 × 4?', answer: 68, options: [68, 69, 70, 71] },
    { question: 'What is 17 × 5?', answer: 85, options: [85, 86, 87, 88] },
    { question: 'What is 17 × 6?', answer: 102, options: [102, 103, 104, 105] },
    { question: 'What is 17 × 7?', answer: 119, options: [119, 120, 121, 122] },
    { question: 'What is 17 × 8?', answer: 136, options: [136, 137, 138, 139] },
    { question: 'What is 17 × 9?', answer: 153, options: [153, 154, 155, 156] },
    { question: 'What is 17 × 10?', answer: 170, options: [170, 171, 172, 173] },
    { question: 'What is 17 × 11?', answer: 187, options: [187, 188, 189, 190] },
    { question: 'What is 17 × 12?', answer: 204, options: [204, 205, 206, 207] },
    { question: 'What is 17 × 13?', answer: 221, options: [221, 222, 223, 224] },
    { question: 'What is 17 × 14?', answer: 238, options: [238, 239, 240, 241] },
    { question: 'What is 17 × 15?', answer: 255, options: [255, 256, 257, 258] },
    { question: 'What is 17 × 16?', answer: 272, options: [272, 273, 274, 275] },
    { question: 'What is 17 × 17?', answer: 289, options: [289, 290, 291, 292] },
    { question: 'What is 17 × 18?', answer: 306, options: [306, 307, 308, 309] },
    { question: 'What is 17 × 19?', answer: 323, options: [323, 324, 325, 326] },
    { question: 'What is 17 × 20?', answer: 340, options: [340, 341, 342, 343] },

    { question: 'What is 18 × 1?', answer: 18, options: [18, 19, 20, 21] },
    { question: 'What is 18 × 2?', answer: 36, options: [36, 37, 38, 39] },
    { question: 'What is 18 × 3?', answer: 54, options: [54, 55, 56, 57] },
    { question: 'What is 18 × 4?', answer: 72, options: [72, 73, 74, 75] },
    { question: 'What is 18 × 5?', answer: 90, options: [90, 91, 92, 93] },
    { question: 'What is 18 × 6?', answer: 108, options: [108, 109, 110, 111] },
    { question: 'What is 18 × 7?', answer: 126, options: [126, 127, 128, 129] },
    { question: 'What is 18 × 8?', answer: 144, options: [144, 145, 146, 147] },
    { question: 'What is 18 × 9?', answer: 162, options: [162, 163, 164, 165] },
    { question: 'What is 18 × 10?', answer: 180, options: [180, 181, 182, 183] },
    { question: 'What is 18 × 11?', answer: 198, options: [198, 199, 200, 201] },
    { question: 'What is 18 × 12?', answer: 216, options: [216, 217, 218, 219] },
    { question: 'What is 18 × 13?', answer: 234, options: [234, 235, 236, 237] },
    { question: 'What is 18 × 14?', answer: 252, options: [252, 253, 254, 255] },
    { question: 'What is 18 × 15?', answer: 270, options: [270, 271, 272, 273] },
    { question: 'What is 18 × 16?', answer: 288, options: [288, 289, 290, 291] },
    { question: 'What is 18 × 17?', answer: 306, options: [306, 307, 308, 309] },
    { question: 'What is 18 × 18?', answer: 324, options: [324, 325, 326, 327] },
    { question: 'What is 18 × 19?', answer: 342, options: [342, 343, 344, 345] },
    { question: 'What is 18 × 20?', answer: 360, options: [360, 361, 362, 363] },

    { question: 'What is 19 × 1?', answer: 19, options: [19, 20, 21, 22] },
    { question: 'What is 19 × 2?', answer: 38, options: [38, 39, 40, 41] },
    { question: 'What is 19 × 3?', answer: 57, options: [57, 58, 59, 60] },
    { question: 'What is 19 × 4?', answer: 76, options: [76, 77, 78, 79] },
    { question: 'What is 19 × 5?', answer: 95, options: [95, 96, 97, 98] },
    { question: 'What is 19 × 6?', answer: 114, options: [114, 115, 116, 117] },
    { question: 'What is 19 × 7?', answer: 133, options: [133, 134, 135, 136] },
    { question: 'What is 19 × 8?', answer: 152, options: [152, 153, 154, 155] },
    { question: 'What is 19 × 9?', answer: 171, options: [171, 172, 173, 174] },
    { question: 'What is 19 × 10?', answer: 190, options: [190, 191, 192, 193] },
    { question: 'What is 19 × 11?', answer: 209, options: [209, 210, 211, 212] },
    { question: 'What is 19 × 12?', answer: 228, options: [228, 229, 230, 231] },
    { question: 'What is 19 × 13?', answer: 247, options: [247, 248, 249, 250] },
    { question: 'What is 19 × 14?', answer: 266, options: [266, 267, 268, 269] },
    { question: 'What is 19 × 15?', answer: 285, options: [285, 286, 287, 288] },
    { question: 'What is 19 × 16?', answer: 304, options: [304, 305, 306, 307] },
    { question: 'What is 19 × 17?', answer: 323, options: [323, 324, 325, 326] },
    { question: 'What is 19 × 18?', answer: 342, options: [342, 343, 344, 345] },
    { question: 'What is 19 × 19?', answer: 361, options: [361, 362, 363, 364] },
    { question: 'What is 19 × 20?', answer: 380, options: [380, 381, 382, 383] },

    { question: 'What is 20 × 1?', answer: 20, options: [20, 21, 22, 23] },
    { question: 'What is 20 × 2?', answer: 40, options: [40, 41, 42, 43] },
    { question: 'What is 20 × 3?', answer: 60, options: [60, 61, 62, 63] },
    { question: 'What is 20 × 4?', answer: 80, options: [80, 81, 82, 83] },
    { question: 'What is 20 × 5?', answer: 100, options: [100, 101, 102, 103] },
    { question: 'What is 20 × 6?', answer: 120, options: [120, 121, 122, 123] },
    { question: 'What is 20 × 7?', answer: 140, options: [140, 141, 142, 143] },
    { question: 'What is 20 × 8?', answer: 160, options: [160, 161, 162, 163] },
    { question: 'What is 20 × 9?', answer: 180, options: [180, 181, 182, 183] },
    { question: 'What is 20 × 10?', answer: 200, options: [200, 201, 202, 203] },
    { question: 'What is 20 × 11?', answer: 220, options: [220, 221, 222, 223] },
    { question: 'What is 20 × 12?', answer: 240, options: [240, 241, 242, 243] },
    { question: 'What is 20 × 13?', answer: 260, options: [260, 261, 262, 263] },
    { question: 'What is 20 × 14?', answer: 280, options: [280, 281, 282, 283] },
    { question: 'What is 20 × 15?', answer: 300, options: [300, 301, 302, 303] },
    { question: 'What is 20 × 16?', answer: 320, options: [320, 321, 322, 323] },
    { question: 'What is 20 × 17?', answer: 340, options: [340, 341, 342, 343] },
    { question: 'What is 20 × 18?', answer: 360, options: [360, 361, 362, 363] },
    { question: 'What is 20 × 19?', answer: 380, options: [380, 381, 382, 383] },
    { question: 'What is 20 × 20?', answer: 400, options: [400, 401, 402, 403] },
            ],
            hard: [
                { question: 'What is 21 x 21?', answer: 441, options: [441, 420, 400, 481] },
                // Add more questions here...
            ]
        },
        "fraction-percentage": {
            easy: [
                { question: 'What is 1% in fraction format?', answer: '1/100', options: ['1/100', '1/10', '1/5', '1/20'] },
                { question: 'What is 5% in fraction format?', answer: '1/20', options: ['1/20', '1/10', '1/5', '1/100'] },
                { question: "What is 33.33% in fraction format?", answer: "1/3", options: ["1/3", "1/4", "1/2", "2/5"] },
                { question: "What is 25% in fraction format?", answer: "1/4", options: ["1/4", "1/5", "1/3", "1/6"] },
                { question: "What is 16.66% in fraction format?", answer: "1/6", options: ["1/6", "1/5", "1/4", "1/7"] },
                { question: "What is 14.28% in fraction format?", answer: "1/7", options: ["1/7", "1/8", "1/6", "1/9"] },
                { question: "What is 12.5% in fraction format?", answer: "1/8", options: ["1/8", "1/9", "1/7", "1/10"] },
                { question: "What is 11.11% in fraction format?", answer: "1/9", options: ["1/9", "1/10", "1/8", "1/11"] },
                { question: "What is 10% in fraction format?", answer: "1/10", options: ["1/10", "1/9", "1/11", "1/8"] },
                { question: "What is 9.09% in fraction format?", answer: "1/11", options: ["1/11", "1/10", "1/12", "1/9"] },
                { question: "What is 8.33% in fraction format?", answer: "1/12", options: ["1/12", "1/13", "1/11", "1/10"] },
                { question: "What is 7.14% in fraction format?", answer: "1/14", options: ["1/14", "1/13", "1/12", "1/15"] },
                { question: 'What is 40% in fraction format?', answer: '2/5', options: ['2/5', '1/2', '2/4', '1/4'] },
                { question: 'What is 75% in fraction format?', answer: '3/4', options: ['3/4', '2/3', '1/2', '5/8'] },
                { question: 'What is 80% in fraction format?', answer: '4/5', options: ['4/5', '3/4', '1/2', '2/3'] }
            ],
            moderate: [
                { question: 'What is 7.69% in fraction format?', answer: '1/13', options: ['1/13', '1/12', '1/14', '1/15'] },
                { question: 'What is 6.66% in fraction format?', answer: '1/15', options: ['1/15', '1/16', '1/14', '1/12'] },
                { question: 'What is 6.25% in fraction format?', answer: '1/16', options: ['1/16', '1/15', '1/18', '1/12'] },
                { question: 'What is 5.88% in fraction format?', answer: '1/17', options: ['1/17', '1/16', '1/15', '1/18'] },
                { question: 'What is 5.55% in fraction format?', answer: '1/18', options: ['1/18', '1/19', '1/17', '1/16'] },
                { question: 'What is 5.26% in fraction format?', answer: '1/19', options: ['1/19', '1/18', '1/20', '1/17'] },
                { question: 'What is 62.5% in fraction format?', answer: '5/8', options: ['5/8', '3/5', '2/3', '3/4'] },
                { question: 'What is 37.5% in fraction format?', answer: '3/8', options: ['3/8', '2/5', '1/3', '3/7'] },
                { question: 'What is 13.33% in fraction format?', answer: '2/15', options: ['2/15', '1/7', '3/20', '4/30'] },
                { question: 'What is 53.33% in fraction format?', answer: '8/15', options: ['8/15', '7/13', '5/9', '4/7'] }
            ],
            hard: [
                { question: 'What is 2.5% in fraction format?', answer: '1/40', options: ['1/40', '1/50', '1/30', '1/20'] },
                { question: 'What is 1.66% in fraction format?', answer: '1/60', options: ['1/60', '1/70', '1/50', '1/40'] },
                { question: 'What is 68.25% in fraction format?', answer: '273/400', options: ['273/400', '271/400', '275/400', '270/400'] },
                { question: 'What is 83.33% in fraction format?', answer: '5/6', options: ['5/6', '4/5', '7/8', '6/7'] },
                { question: 'What is 28.56% in fraction format?', answer: '2/7', options: ['2/7', '3/10', '3/11', '4/15'] },
                { question: 'What is 42.84% in fraction format?', answer: '3/7', options: ['3/7', '4/9', '2/5', '5/8'] },
                { question: 'What is 56.14% in fraction format?', answer: '9/16', options: ['9/16', '7/12', '5/9', '4/7'] },
                { question: 'What is 71.42% in fraction format?', answer: '5/7', options: ['5/7', '4/5', '6/8', '7/9'] },
                { question: 'What is 85.71% in fraction format?', answer: '6/7', options: ['6/7', '5/6', '7/8', '8/9'] },
                { question: 'What is 87.5% in fraction format?', answer: '7/8', options: ['7/8', '6/7', '5/6', '8/9'] },
                { question: 'What is 41.66% in fraction format?', answer: '5/12', options: ['5/12', '4/9', '3/8', '6/13'] },
                { question: 'What is 58.33% in fraction format?', answer: '7/12', options: ['7/12', '5/9', '6/11', '8/13'] },
                { question: 'What is 91.66% in fraction format?', answer: '11/12', options: ['11/12', '10/11', '9/10', '8/9'] },
                { question: 'What is 86.66% in fraction format?', answer: '13/15', options: ['13/15', '12/14', '11/13', '14/16'] },
                { question: 'What is 18.75% in fraction format?', answer: '3/16', options: ['3/16', '2/9', '5/20', '4/15'] },
                { question: 'What is 31.25% in fraction format?', answer: '5/16', options: ['5/16', '4/13', '3/14', '6/19'] },
                { question: 'What is 56.25% in fraction format?', answer: '9/16', options: ['9/16', '7/12', '8/14', '10/18'] },
                { question: 'What is 3.33% in fraction format?', answer: '1/30', options: ['1/30', '1/25', '1/35', '1/40'] },
                { question: 'What is 93.33% in fraction format?', answer: '14/15', options: ['14/15', '13/14', '12/13', '15/16'] },
                { question: 'What is 96.66% in fraction format?', answer: '29/30', options: ['29/30', '28/30', '27/30', '30/31'] }
            ]
        }
    };

    questions = questionData[topic][difficulty];
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function displayQuizInfo(topic, difficulty) {
    document.getElementById('quizTopic').innerText = `Topic: ${topic}`;
    document.getElementById('quizDifficulty').innerText = `Difficulty: ${difficulty}`;
}

function startQuestion() {
    const questionData = questions[currentQuestion];
    shuffleArray(questionData.options); // Shuffle options before displaying

    document.getElementById('questionText').innerText = questionData.question;

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((button, index) => {
        button.innerText = `${index + 1}. ${questionData.options[index]}`;
        button.style.backgroundColor = 'white';
        button.onclick = () => selectOption(index);
    });

    timeLeft = getTimeForDifficulty();
    document.getElementById('timeLeft').innerText = timeLeft;
    timer = setInterval(updateTimer, 1000);
}

// Function to shuffle the options array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getTimeForDifficulty() {
    const difficulty = document.getElementById('difficulty').value;
    return difficulty === 'easy' ? 15 : difficulty === 'moderate' ? 30 : 45;
}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        showResult(-1);
    } else {
        timeLeft -= 1;
        document.getElementById('timeLeft').innerText = timeLeft;
    }
}

function selectOption(selectedIndex) {
    clearInterval(timer);
    showResult(selectedIndex);
}

function showResult(selectedIndex) {
    const questionData = questions[currentQuestion];
    const optionButtons = document.querySelectorAll('.option-btn');
    
    optionButtons.forEach((button, index) => {
        if (index === selectedIndex) {
            if (questionData.options[index] === questionData.answer) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red';
            }
        } else if (questionData.options[index] === questionData.answer) {
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'grey';
        }
    });

    document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        startQuestion();
        document.getElementById('nextBtn').style.display = 'none';
    } else {
        alert('Quiz Completed!');
        goHome();
    }
}

function goHome() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    currentQuestion = 0;
}