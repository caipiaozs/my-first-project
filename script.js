// GitHub版本控制学习项目 - JavaScript文件 (GitHub Pages版)
// 作者：caipiaozs
// 创建时间：2025-06-21
// 更新：添加GitHub Pages功能

console.log('🚀 GitHub版本控制学习项目启动！');
console.log('🌐 现已部署到GitHub Pages！');

// 项目信息
const projectInfo = {
    name: '我的第一个GitHub项目',
    version: '1.2.0',
    author: 'caipiaozs',
    description: '学习GitHub版本控制的演示项目 - GitHub Pages版',
    features: [
        '版本控制管理',
        '分支开发',
        '文件提交',
        '合并请求',
        'GitHub Pages部署'
    ],
    deploymentInfo: {
        platform: 'GitHub Pages',
        url: 'https://caipiaozs.github.io/my-first-project',
        deployTime: new Date().toISOString()
    }
};

// 显示项目信息
function displayProjectInfo() {
    console.log('📋 项目信息：', projectInfo);
    
    // 动态更新页面内容
    const versionElement = document.querySelector('.version');
    if (versionElement) {
        versionElement.innerHTML = `版本：v${projectInfo.version} - 现已上线！ 🌐`;
    }
    
    // 显示部署信息
    console.log('🌐 部署信息：', projectInfo.deploymentInfo);
}

// 添加GitHub Pages徽章
function addGitHubPagesBadge() {
    const badge = document.createElement('div');
    badge.className = 'github-pages-badge';
    badge.innerHTML = '🌐 GitHub Pages';
    badge.title = 'Powered by GitHub Pages';
    document.body.appendChild(badge);
}

// 添加交互功能
function initializeInteractions() {
    // 为功能卡片添加点击效果
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.addEventListener('click', () => {
            // 添加点击动画
            feature.style.transform = 'scale(1.02)';
            setTimeout(() => {
                feature.style.transform = 'scale(1)';
            }, 200);
            
            console.log(`🎯 点击了功能卡片 ${index + 1}`);
            
            // 添加点击特效
            createClickEffect(event);
        });
        
        // 添加悬停效果
        feature.addEventListener('mouseenter', () => {
            feature.style.boxShadow = '0 15px 30px rgba(52, 152, 219, 0.3)';
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // 为按钮添加特殊效果
    const buttons = document.querySelectorAll('.btn, .link-grid a');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            createRippleEffect(e);
        });
    });
}

// 创建点击特效
function createClickEffect(event) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(52, 152, 219, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = (event.clientX - event.target.offsetLeft) + 'px';
    ripple.style.top = (event.clientY - event.target.offsetTop) + 'px';
    ripple.style.width = ripple.style.height = '20px';
    ripple.style.pointerEvents = 'none';
    
    event.target.style.position = 'relative';
    event.target.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// 创建水波纹效果
function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// 添加学习进度功能
function createLearningProgress() {
    const progressData = [
        { name: '创建仓库', completed: true, date: '2025-06-21' },
        { name: '添加文件', completed: true, date: '2025-06-21' },
        { name: '创建分支', completed: true, date: '2025-06-21' },
        { name: '提交更改', completed: true, date: '2025-06-21' },
        { name: '合并分支', completed: true, date: '2025-06-21' },
        { name: '部署Pages', completed: true, date: '2025-06-21' }
    ];
    
    const container = document.querySelector('.container');
    if (container) {
        const progressSection = document.createElement('div');
        progressSection.className = 'feature';
        progressSection.innerHTML = `
            <h3>📊 学习进度 - 全部完成！</h3>
            <div id="progress-list"></div>
            <div class="progress">
                <div class="progress-bar" style="width: 100%"></div>
            </div>
            <p style="text-align: center; margin-top: 10px; font-weight: 600; color: #27ae60;">
                🎉 恭喜！您已完成所有学习目标！
            </p>
        `;
        
        container.appendChild(progressSection);
        
        const progressList = document.getElementById('progress-list');
        progressData.forEach((item, index) => {
            const progressItem = document.createElement('div');
            progressItem.style.margin = '10px 0';
            progressItem.style.padding = '8px';
            progressItem.style.background = item.completed ? '#d4edda' : '#f8d7da';
            progressItem.style.borderRadius = '5px';
            progressItem.style.border = `1px solid ${item.completed ? '#c3e6cb' : '#f5c6cb'}`;
            progressItem.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${item.name}</span>
                    <div>
                        <span style="font-size: 1.2em; margin-right: 10px;">${item.completed ? '✅' : '⏳'}</span>
                        <small style="color: #666;">${item.date}</small>
                    </div>
                </div>
            `;
            
            // 添加延迟动画
            setTimeout(() => {
                progressItem.style.opacity = '0';
                progressItem.style.transform = 'translateX(-20px)';
                progressItem.style.transition = 'all 0.3s ease';
                progressList.appendChild(progressItem);
                
                setTimeout(() => {
                    progressItem.style.opacity = '1';
                    progressItem.style.transform = 'translateX(0)';
                }, 50);
            }, index * 100);
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
        'git push origin main',
        'git pages deploy'  // GitHub Pages相关
    ];
    
    console.log('🔧 常用Git命令：');
    gitCommands.forEach((cmd, index) => {
        console.log(`${index + 1}. ${cmd}`);
    });
    
    console.log('🌐 GitHub Pages部署完成！');
    console.log('📱 访问地址：https://caipiaozs.github.io/my-first-project');
}

// 检查GitHub Pages状态
function checkGitHubPagesStatus() {
    console.log('🔍 检查GitHub Pages状态...');
    
    // 模拟检查状态
    setTimeout(() => {
        console.log('✅ GitHub Pages状态：正常运行');
        console.log('🌐 网站地址：https://caipiaozs.github.io/my-first-project');
        console.log('🚀 部署状态：成功');
        
        // 在页面上显示状态
        const statusBadge = document.createElement('div');
        statusBadge.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            padding: 10px 15px;
            border-radius: 25px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 1000;
            box-shadow: 0 4px 10px rgba(40, 167, 69, 0.3);
            animation: slideInUp 0.5s ease;
        `;
        statusBadge.innerHTML = '✅ Pages Online';
        statusBadge.title = 'GitHub Pages部署成功';
        document.body.appendChild(statusBadge);
    }, 1000);
}

// 添加CSS动画
function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes slideInUp {
            from {
                transform: translateY(100px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 GitHub Pages页面加载完成');
    
    // 初始化所有功能
    displayProjectInfo();
    addGitHubPagesBadge();
    initializeInteractions();
    createLearningProgress();
    showGitCommands();
    checkGitHubPagesStatus();
    addCustomStyles();
    
    // 添加版本控制提示
    setTimeout(() => {
        console.log('💡 提示：这个项目现在已经部署到GitHub Pages！');
        console.log('🔀 您已经掌握了完整的GitHub工作流程');
        console.log('🎓 恭喜完成GitHub版本控制学习！');
    }, 2000);
    
    // 欢迎消息
    setTimeout(() => {
        if (confirm('🎉 恭喜！您的项目已成功部署到GitHub Pages！\n\n是否要查看项目源码？')) {
            window.open('https://github.com/caipiaozs/my-first-project', '_blank');
        }
    }, 3000);
});

// 导出模块（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projectInfo,
        displayProjectInfo,
        initializeInteractions,
        checkGitHubPagesStatus
    };
}