// GitHub版本控制学习项目 - JavaScript文件
// 作者：caipiaozs
// 创建时间：2025-06-21

console.log('🚀 GitHub版本控制学习项目启动！');

// 项目信息
const projectInfo = {
    name: '我的第一个GitHub项目',
    version: '1.1.0',
    author: 'caipiaozs',
    description: '学习GitHub版本控制的演示项目',
    features: [
        '版本控制管理',
        '分支开发',
        '文件提交',
        '合并请求'
    ]
};

// 显示项目信息
function displayProjectInfo() {
    console.log('📋 项目信息：', projectInfo);
    
    // 动态更新页面内容
    const versionElement = document.querySelector('.version');
    if (versionElement) {
        versionElement.textContent = `版本：v${projectInfo.version}`;
    }
}

// 添加交互功能
function initializeInteractions() {
    // 为功能卡片添加点击效果
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.addEventListener('click', () => {
            feature.style.transform = 'scale(1.02)';
            setTimeout(() => {
                feature.style.transform = 'scale(1)';
            }, 200);
            
            console.log(`🎯 点击了功能卡片 ${index + 1}`);
        });
        
        // 添加悬停效果
        feature.addEventListener('mouseenter', () => {
            feature.style.boxShadow = '0 15px 30px rgba(52, 152, 219, 0.3)';
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        });
    });
}

// 添加学习进度功能
function createLearningProgress() {
    const progressData = [
        { name: '创建仓库', completed: true },
        { name: '添加文件', completed: true },
        { name: '创建分支', completed: true },
        { name: '提交更改', completed: false },
        { name: '合并分支', completed: false },
        { name: '发布版本', completed: false }
    ];
    
    const container = document.querySelector('.container');
    if (container) {
        const progressSection = document.createElement('div');
        progressSection.className = 'feature';
        progressSection.innerHTML = `
            <h3>📊 学习进度</h3>
            <div id="progress-list"></div>
        `;
        
        container.appendChild(progressSection);
        
        const progressList = document.getElementById('progress-list');
        progressData.forEach(item => {
            const progressItem = document.createElement('div');
            progressItem.style.margin = '10px 0';
            progressItem.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${item.name}</span>
                    <span style="font-size: 1.2em;">${item.completed ? '✅' : '⏳'}</span>
                </div>
            `;
            progressList.appendChild(progressItem);
        });
    }
}

// 添加Git命令演示
function showGitCommands() {
    const gitCommands = [
        'git init',
        'git add .',
        'git commit -m "初始提交"',
        'git branch feature/new-feature',
        'git checkout feature/new-feature',
        'git merge feature/new-feature',
        'git push origin main'
    ];
    
    console.log('🔧 常用Git命令：');
    gitCommands.forEach((cmd, index) => {
        console.log(`${index + 1}. ${cmd}`);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 页面加载完成');
    displayProjectInfo();
    initializeInteractions();
    createLearningProgress();
    showGitCommands();
    
    // 添加版本控制提示
    setTimeout(() => {
        console.log('💡 提示：这个文件是在feature/add-javascript分支中创建的！');
        console.log('🔀 下一步将演示如何合并分支到主分支');
    }, 2000);
});

// 导出模块（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projectInfo,
        displayProjectInfo,
        initializeInteractions
    };
}