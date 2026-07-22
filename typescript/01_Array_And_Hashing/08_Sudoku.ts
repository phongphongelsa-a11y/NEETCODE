// ======================== Sudoku  ===============================

function is_Valid_Sudoku(board:string[]) : boolean {
/**
    * @problem: [Valid Sudoku] | https://neetcode.io/problems/valid-sudoku/question?list=neetcode150 ]
    * @Solution:  Vaild Sudoku
    * @Idea: 
    *   Duyệt từng row, column kiểm tra trùng lặp
    *   Duyệt từng box kiểm tra trùng lặp 
    *   Tạo set cho từng row, column - nếu has board[i][j] trả về false - ko thì add vào set
    *   Column tương tự
    *   Box lấy các vị trí bắt đầu của từng box (bài này cho cố định kích thước là 9 nên có thể tính luôn vị trí bắt đầu cho từng box)
    *   Tạo set cho từng box và kiểm tra trùng lặp
    *   Nếu case đi hết mà không trả về false ở lần duyệt nào thì cuối cùng có thể trả về true
    * @Complexcity: 
    * - Time: o(n^2)
    * - Space: o(n) 
 */
        // duyệt từng Row
        for (let i = 0;i<9;i++) {
            let seen = new Set();
            for (let j = 0;j<9;j++) {
                if (board[i][j]==".") continue;
                if (seen.has(board[i][j])) {
                    return false;
                }
                seen.add(board[i][j]);
            }
        }

        // duyệt từng Column
        for (let j=0;j<9;j++) {
            let seen = new Set();
            for (let i=0;i<9;i++) {
                if (board[i][j]==".") continue;
                if (seen.has(board[i][j])) {
                    return false;
                }
                seen.add(board[i][j]);
            }
        }

        // duyệt từng box
        const start = [
            [0,0], [0,3], [0,6],
            [3,0], [3,3], [3,6],
            [6,0], [6,3], [6,6],
        ];

        for (const [startRow, startCol] of start ) {
            let seen = new Set();
            for (let i = 0;i<3;i++) {
                for (let j = 0; j<3;j++) {
                    let r = startRow +i;
                    let c = startCol +j;
                    let val = board[r][c];
                    if (val == ".") continue;
                    if (seen.has(board[r][c])) {
                        return false;
                    }
                    seen.add(board[r][c]);
                }
            }
        }
        return true;
    }

